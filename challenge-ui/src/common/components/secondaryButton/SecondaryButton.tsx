import React, { FC } from 'react';
import Button from '@mui/material/Button';
import * as styles from './styles';

type SecondaryButtonPropsType = {
  children: any;
  [x: string]: any;
};

export const SecondaryButton: FC<SecondaryButtonPropsType> = ({ children, ...rest }) => {
  return (
    <Button {...rest} css={styles.secondaryStyle}>
      {children}
    </Button>
  );
};
