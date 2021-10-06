import { css } from '@emotion/react';

export const formButtonSpinner = (isProcessing?: boolean) =>
  css({
    color: '#4D81B7',
    cursor: `${isProcessing ? 'not-allowed' : 'pointer'}`,
    marginLeft: '10px',
  });
