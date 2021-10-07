import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as styles from './styles';

type ModalPropType = {
  title: string;
  contentText: string;
  ActionArea: Function;
  isOpen: boolean;
  onClose?: any;
};

export const Modal: FC<ModalPropType> = ({
  title,
  contentText,
  ActionArea,
  isOpen,
  onClose = () => null,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'>
        <DialogTitle id='modal-title' css={styles.modalTitle}>
          {title}
        </DialogTitle>
        <DialogContent css={styles.modalContentContainer}>
          <DialogContentText id='modal-description' css={styles.modalContentText}>
            {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>{ActionArea()}</DialogActions>
      </Dialog>
    </>
  );
};
