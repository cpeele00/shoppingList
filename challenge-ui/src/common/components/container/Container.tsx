import { styled } from '@mui/material/styles';

export const Container = ({ children }) => {
  const StyledContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  });

  return <StyledContainer>{children}</StyledContainer>;
};
