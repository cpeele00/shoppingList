import React, { FC, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { EmptyState, Modal, PrimaryButton, SecondaryButton } from '../../common/components';
import { List } from './components';
import { ItemDrawer } from './components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Item } from '../../common/types/item.type';
import * as styles from './styles';
import { statusType } from '../../common/constants/statusType.constants';
import CircularProgress from '@mui/material/CircularProgress';

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

    if (status.statusType === statusType.success) {
      setShowSnackbar(true);
      setIsDrawerOpen(false);
      setSelectedItem(null);
    }
  }, [status]);

  return (
    <>
      {items?.length === 0 ? (
        <EmptyState>
          <>
            <h2 css={styles.zeroStateMessage}>Your shopping list is empty :(</h2>
            <div>
              <Button variant='contained' onClick={() => setIsDrawerOpen(true)}>
                Add your first item
              </Button>
            </div>
          </>
        </EmptyState>
      ) : (
        <>
          <div css={styles.actionArea}>
            <h2 css={styles.heading}>
              Your Items
              {isProcessing && <CircularProgress size={30} css={styles.headingSpinner} />}
            </h2>
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
                id={`listItem-${item.id}`}
                key={item.id}
                item={item}
                onToggleComplete={handleToggleComplete}
                onEdit={handleEditItem}
                onDelete={handleDeleteItemRequest}
              />
            ))}
          </List>

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
        </>
      )}
      <ItemDrawer
        item={selectedItem}
        isOpen={isDrawerOpen}
        isProcessing={isProcessing}
        isSuccess={status.statusType === statusType.success}
        closeDrawer={() => setIsDrawerOpen(false)}
        onSave={onSave}
      />
    </>
  );

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
