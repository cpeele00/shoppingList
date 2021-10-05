import { types } from './ui.actions';

const initialState = {
  isLoading: false,
};

export const uiReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.IS_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
