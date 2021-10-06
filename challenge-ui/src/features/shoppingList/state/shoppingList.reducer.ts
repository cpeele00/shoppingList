import { types } from './shoppingList.actions';

const initialState = [];

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEMS:
      return [...state, ...action.payload];
    case types.ADD_ITEM:
      return [action.payload, ...state];
    default:
      return state;
  }
};
