import React, { FC } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import * as styles from './styles';

type FormButtonPropsType = {
  isProcessing: boolean;
  children: JSX.Element;
  [x: string]: any;
};

export const FormButton: FC<FormButtonPropsType> = ({
  isProcessing = false,
  children,
  ...rest
}) => {
  return (
    <Button {...rest}>
      {children}

      {isProcessing && <CircularProgress size={20} css={styles.formButtonSpinner(isProcessing)} />}
    </Button>
  );
};
