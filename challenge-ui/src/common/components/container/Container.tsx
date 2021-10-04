import { FC } from 'react';
import { styled } from '@mui/material/styles';

type ContainerPropsType = {
  children: JSX.Element;
};

export const Container: FC<ContainerPropsType> = ({ children }) => {
  const StyledContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '960px',
    marginTop: '130px',
    marginLeft: 'auto',
    marginRight: 'auto',
  });

  return <StyledContainer>{children}</StyledContainer>;
};
