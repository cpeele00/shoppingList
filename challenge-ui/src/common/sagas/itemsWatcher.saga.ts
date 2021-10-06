import { takeLatest } from 'redux-saga/effects';
import { types as itemsTypes } from '../../features/shoppingList/state/shoppingList.actions';
import {
  addItemHandler,
  updateItemHandler,
  deleteItemHander,
  getAllItemsHandler,
} from '../../features/shoppingList/state/shoppingList.saga';

export function* getItemsWatcherSaga() {
  yield takeLatest(itemsTypes.GET_ITEMS, getAllItemsHandler);
}

export function* addItemWatcherSaga() {
  yield takeLatest(itemsTypes.SAVE_ITEM, addItemHandler);
}

export function* updateItemWatcherSaga() {
  yield takeLatest(itemsTypes.UPDATE_ITEM, updateItemHandler);
}

export function* removeItemWatcherSaga() {
  yield takeLatest(itemsTypes.DELETE_ITEM, deleteItemHander);
}
