export const getItems = () => ({ type: types.GET_ITEMS });
export const setItems = items => ({ type: types.SET_ITEMS, payload: items });
export const saveItem = item => ({ type: types.SAVE_ITEM, payload: item });
export const addItem = item => ({ type: types.ADD_ITEM, payload: item });

export const types = {
  GET_ITEMS: 'list/get_items',
  SET_ITEMS: 'list/set_items',
  ADD_ITEM: 'list/add_item',
  SAVE_ITEM: 'list/save_item',
};

export const actions = {
  getItems,
  setItems,
  addItem,
  saveItem,
};
