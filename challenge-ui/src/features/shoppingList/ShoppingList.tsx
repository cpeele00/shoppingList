import React, { FC, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { EmptyState } from '../../common/components';
import { List } from './components';
import { ItemDrawer } from './components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type ShoppingListPropTypes = {
  items: any[];
  isProcessing: boolean;
  status: any;
  onSave: Function;
};

export const ShoppingList: FC<ShoppingListPropTypes> = ({
  items,
  isProcessing,
  onSave,
  status,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    if (!status) return;

    if (status.statusType === 'success') {
      setShowSnackbar(true);
      setIsDrawerOpen(false);
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
        <div
          css={{
            width: '350px',
            padding: '15px',
            color: '#fff',
            borderRadius: '4px',
            backgroundColor: '#30b937',
            display: 'flex',
          }}>
          <CheckCircleOutlineIcon css={{ marginRight: '10px' }} />
          {status.message}
        </div>
      </Snackbar>
      <ItemDrawer
        isOpen={isDrawerOpen}
        isProcessing={isProcessing}
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                key={item.id}
                title={item.title}
                description={item.description}
                complete={item.isComplete}
                onToggleComplete={() => console.log('toggled')}
                onEdit={() => console.log('on edit clicked')}
                onDelete={() => console.log('on delete clicked')}
              />
            ))}
          </List>
        </>
      );
    }
  }
};
