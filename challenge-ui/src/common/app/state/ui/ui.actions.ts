const isLoading = (isLoading: boolean) => ({ type: types.IS_LOADING, payload: isLoading });

export const types = {
  IS_LOADING: 'app/isLoading',
};

export const actions = {
  isLoading,
};
