import { css } from '@emotion/react';
import { vars } from '../../../styleVars/vars';

export const primaryStyle = css({
  backgroundColor: vars.button.primary.backgroundColor,
});

export const primaryButtonSpinner = (isProcessing?: boolean) =>
  css({
    color: '#4D81B7',
    cursor: `${isProcessing ? 'not-allowed' : 'pointer'}`,
    marginLeft: '10px',
  });
