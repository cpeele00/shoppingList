import React, { FC, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { EmptyState } from '../../common/components';
import { List } from './components';
import { ItemDrawer } from './components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import * as styles from './styles';

type ShoppingListPropTypes = {
  items: any[];
  isProcessing: boolean;
  status: any;
  onSave: Function;
  onDelete: Function;
};

export const ShoppingList: FC<ShoppingListPropTypes> = ({
  items,
  isProcessing,
  status,
  onSave,
  onDelete,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!status) return;

    if (status.statusType === 'success') {
      setShowSnackbar(true);
      setIsDrawerOpen(false);
      setSelectedItem(null);
    }
  }, [status]);

  return (
    <>
      {renderZeroState()}
      {renderShoppingListItems()}

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        message='test'
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <div css={styles.snackBar}>
          <CheckCircleOutlineIcon css={{ marginRight: '10px' }} />
          {status.message}
        </div>
      </Snackbar>
      <ItemDrawer
        item={selectedItem}
        isOpen={isDrawerOpen}
        isProcessing={isProcessing}
        isSuccess={status.statusType === 'success'}
        closeDrawer={() => setIsDrawerOpen(false)}
        onSave={onSave}
      />
    </>
  );

  function renderZeroState() {
    if (items?.length === 0) {
      return (
        <EmptyState>
          <>
            <p>Your shopping list is empty :(</p>
            <div>
              <Button variant='contained' onClick={() => setIsDrawerOpen(true)}>
                Add your first item
              </Button>
            </div>
          </>
        </EmptyState>
      );
    }
  }

  function renderShoppingListItems() {
    if (items?.length > 0) {
      return (
        <>
          <div css={styles.actionArea}>
            <h2>Your Items</h2>
            <div>
              <Button size='medium' variant='contained' onClick={() => setIsDrawerOpen(true)}>
                Add Item
              </Button>
            </div>
          </div>
          <List>
            {items?.map(item => (
              <List.Item
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                numberOfItems={item.numberOfItems}
                complete={item.isComplete}
                isProcessing={isProcessing}
                onToggleComplete={handleToggleComplete}
                onEdit={handleEditItem}
                onDelete={id => onDelete(id)}
              />
            ))}
          </List>
        </>
      );
    }
  }

  function handleEditItem(item) {
    setSelectedItem(item);
    setIsDrawerOpen(true);
  }

  function handleToggleComplete(item) {
    if (onSave) {
      onSave(item);
    }
  }
};
