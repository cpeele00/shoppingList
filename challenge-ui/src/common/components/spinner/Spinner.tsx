import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '../container';

type SpinnerPropsType = {
  size?: number;
};

export const Spinner: FC<SpinnerPropsType> = ({ size = 76 }) => {
  return (
    <Container>
      <CircularProgress size={size} />
    </Container>
  );
};
