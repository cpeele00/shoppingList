import { css } from '@emotion/react';

export const iconButtonBase = (isDisabled?: boolean) =>
  css({
    color: `${isDisabled ? '#999' : '#555F7C'}`,
    cursor: `${isDisabled ? 'not-allowed' : 'pointer'}`,
    ':hover': {
      color: '#999',
    },
  });
