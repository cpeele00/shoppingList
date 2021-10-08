import { css } from '@emotion/react';

export const listItem = (isComplete: boolean) =>
  css({
    border: `${isComplete ? '0.5px solid rgba(213, 223, 233, 0.17)' : '0.5px solid #d5dfe9'}`,
    background: `${isComplete ? 'rgba(213, 223, 233, 0.17)' : '#fff'}`,
    boxSizing: 'border-box',
    borderRadius: '4px',
    padding: '20px 35px 20px 10px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    '&:last-child': {
      marginBottom: 0,
    },
  });

export const listItemLeftContainer = css({
  display: 'flex',
  alignItems: 'center',
});

export const listItemTitle = (isComplete: boolean) =>
  css({
    fontFamily: 'Nunito',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: 0,
    color: `${isComplete ? '#4D81B7;' : '#000'}`,
    textDecoration: `${isComplete ? 'line-through' : 'none'}`,
    wordBreak: 'break-word',
  });

export const listItemDescription = (isComplete: boolean) =>
  css({
    marginTop: 0,
    marginBottom: 0,
    paddingRight: '15px',
    color: '#7D7A7A',
    textDecoration: `${isComplete ? 'line-through' : 'none'}`,
    wordBreak: 'break-word',
  });

export const listItemActions = css({
  display: 'flex',
});

export const listItemMeta = css({
  marginLeft: 10,
});

export const deleteItem = css({
  color: '#555F7C',
  cursor: 'pointer',
  ':hover': {
    color: '#999',
  },
});
