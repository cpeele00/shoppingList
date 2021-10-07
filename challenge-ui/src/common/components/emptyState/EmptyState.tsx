import React, { FC } from 'react';
import { styled } from '@mui/material/styles';

type EmptyStatePropsType = {
  children: JSX.Element;
};

export const EmptyState: FC<EmptyStatePropsType> = ({ children }) => {
  const Container = styled('div')({
    border: '1px solid #C6C6C6',
    padding: '8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderRadius: '5px',
    width: '614px',
    height: 'auto',
    minHeight: '290px',
    background: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
  });

  const Content = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    color: '#bbb',
    textAlign: 'center',
  });

  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
