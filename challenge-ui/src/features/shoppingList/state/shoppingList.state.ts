export const GET_ITEMS = 'list/get_items';
export const SET_ITEMS = 'list/set_items';

export const getItems = () => ({ type: GET_ITEMS });
export const setItems = items => ({ type: SET_ITEMS, payload: items });

const initialState = [];

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
