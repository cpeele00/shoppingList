import { types } from './shoppingList.actions';

const initialState = [];

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEMS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
