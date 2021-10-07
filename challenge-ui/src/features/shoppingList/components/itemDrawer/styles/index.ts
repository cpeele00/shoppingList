import { css } from '@emotion/react';

export const itemDrawer = css({
  width: 600,
  height: 'auto',
  overflowY: 'hidden',
});

export const drawerHeader = css({
  background: '#fafafa',
  color: '#5C6269',
  padding: '20px 30px 21px 30px',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between',
});

export const drawerHeaderTitle = css({
  marginTop: 0,
  marginBottom: 0,
});

export const drawerContent = css({
  padding: '30px 30px 21px 30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 'calc(100vh - 72px)',
  borderBottom: '10px solid #4D81B7',
});

export const drawerContentLayout = css({
  justifyContent: 'normal',
});

export const drawerButtonLayout = css({
  alignSelf: 'flex-end',
  justifySelf: 'flex-end',
});
