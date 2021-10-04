import React from 'react';
import { styled } from '@mui/material/styles';

export const EmptyState = ({ children }) => {
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
  });

  const Content = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    color: '#bbb',
  });

  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
