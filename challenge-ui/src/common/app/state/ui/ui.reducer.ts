import { types } from './ui.actions';

const initialState = {
  isLoading: false,
  status: {},
};

export const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.IS_LOADING:
      return { ...state, isLoading: payload };
    case types.STATUS:
      return { ...state, status: payload };
    default:
      return state;
  }
};
