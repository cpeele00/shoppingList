import React, { FC, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { EmptyState, Modal, PrimaryButton, SecondaryButton } from '../../common/components';
import { List } from './components';
import { ItemDrawer } from './components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Item } from '../../common/types/item.type';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

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
      {renderSnackbar()}
      {renderDrawer()}
      {renderModal()}
    </>
  );

  function renderZeroState() {
    if (items?.length === 0) {
      return (
        <EmptyState>
          <>
            <h2
              css={{
                color: '#87898C',
              }}>
              Your shopping list is empty :(
            </h2>
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
            <h2 css={styles.heading}>Your Items</h2>
            <div>
              <PrimaryButton
                size='medium'
                variant='contained'
                onClick={() => setIsDrawerOpen(true)}>
                Add Item
              </PrimaryButton>
            </div>
          </div>
          <List>
            {items?.map(item => (
              <List.Item
                item={item}
                key={item.id}
                isProcessing={isProcessing}
                onToggleComplete={handleToggleComplete}
                onEdit={handleEditItem}
                onDelete={handleDeleteItemRequest}
              />
            ))}
          </List>
        </>
      );
    }
  }

  function renderSnackbar() {
    return (
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message='test'
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <div css={styles.snackBar}>
          <CheckCircleOutlineIcon css={{ marginRight: '10px' }} />
          {status.message}
        </div>
      </Snackbar>
    );
  }

  function renderDrawer() {
    return (
      <ItemDrawer
        item={selectedItem}
        isOpen={isDrawerOpen}
        isProcessing={isProcessing}
        isSuccess={status.statusType === 'success'}
        closeDrawer={() => setIsDrawerOpen(false)}
        onSave={onSave}
      />
    );
  }

  function renderModal() {
    return (
      <Modal
        title='Delete Item?'
        contentText='Are you sure you want to delete this item? This cannot be undone.'
        isOpen={isModalOpen}
        ActionArea={() => (
          <>
            <SecondaryButton onClick={handleModalCancel}>Cancel</SecondaryButton>
            <PrimaryButton variant='contained' onClick={handleOnDeleteItem}>
              Delete
            </PrimaryButton>
          </>
        )}
      />
    );
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

  function handleDeleteItemRequest(item) {
    setSelectedItem(item);
    setIsModalOpen(true);
  }

  function handleOnDeleteItem() {
    resetModal();

    if (onDelete) {
      onDelete(selectedItem?.id);
    }
  }

  function handleModalCancel() {
    resetModal();
  }

  function resetModal() {
    setIsModalOpen(false);
    setSelectedItem(null);
  }
};
