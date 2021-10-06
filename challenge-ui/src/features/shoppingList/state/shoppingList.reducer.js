import { types } from './shoppingList.actions';

const initialState = [];

export const itemsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ITEMS:
      return [...state, ...payload];
    case types.ADD_ITEM:
      return [action.payload, ...state];
    case types.REMOVE_ITEM: {
      const filteredItems = state.filter(item => item.id !== payload.deleteItem.id);
      return filteredItems;
    }
    case types.EDIT_ITEM: {
      console.log(payload);
      return state.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return item;
        }
      });
    }
    default:
      return state;
  }
};
