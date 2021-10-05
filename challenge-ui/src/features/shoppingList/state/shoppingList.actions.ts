export const getItems = () => ({ type: types.GET_ITEMS });
export const setItems = items => ({ type: types.SET_ITEMS, payload: items });

export const types = {
  GET_ITEMS: 'list/get_items',
  SET_ITEMS: 'list/set_items',
};

export const actions = {
  getItems,
  setItems,
};
