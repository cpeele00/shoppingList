import { types } from './ui.actions';

const initialState = {
  isLoading: false,
  isProcessing: false,
  status: {},
};

export const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.IS_LOADING:
      return { ...state, isLoading: payload };
    case types.IS_PROCESSING:
      return { ...state, isProcessing: payload };
    case types.STATUS:
      return { ...state, status: payload };
    default:
      return state;
  }
};
