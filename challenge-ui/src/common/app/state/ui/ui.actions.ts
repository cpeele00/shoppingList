const isLoading = (isLoading: boolean) => ({ type: types.IS_LOADING, payload: isLoading });
const status = (statusType: string, message: string) => ({
  type: types.STATUS,
  payload: { statusType, message },
});

export const types = {
  IS_LOADING: 'app/isLoading',
  STATUS: 'app/status',
};

export const actions = {
  isLoading,
  status,
};
