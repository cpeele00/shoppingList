import React, { FC } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import * as styles from './styles';

type PrimaryButtonPropsType = {
  isProcessing?: boolean;
  children: any;
  [x: string]: any;
};

export const PrimaryButton: FC<PrimaryButtonPropsType> = ({
  isProcessing = false,
  children,
  ...rest
}) => {
  return (
    <Button {...rest} css={styles.primaryStyle}>
      {children}

      {isProcessing && (
        <CircularProgress size={20} css={styles.primaryButtonSpinner(isProcessing)} />
      )}
    </Button>
  );
};
