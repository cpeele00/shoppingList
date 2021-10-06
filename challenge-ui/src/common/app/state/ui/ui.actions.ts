const isLoading = (isLoading: boolean) => ({ type: types.IS_LOADING, payload: isLoading });

const isProcessing = (isProcessing: boolean) => ({
  type: types.IS_PROCESSING,
  payload: isProcessing,
});

const status = (statusType: string, message: string) => ({
  type: types.STATUS,
  payload: { statusType, message },
});

// EXPORTS

export const types = {
  IS_LOADING: 'app/isLoading',
  IS_PROCESSING: 'app/isProcessing',
  STATUS: 'app/status',
};

export const actions = {
  isLoading,
  isProcessing,
  status,
};
