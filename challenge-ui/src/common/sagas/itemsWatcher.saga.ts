import { takeLatest } from 'redux-saga/effects';

import {
  addItemHandler,
  getAllItemsHandler,
} from '../../features/shoppingList/state/shoppingList.saga';
import { types as itemsTypes } from '../../features/shoppingList/state/shoppingList.actions';

export function* getItemsWatcherSaga() {
  yield takeLatest(itemsTypes.GET_ITEMS, getAllItemsHandler);
}

export function* addItemWatcherSaga() {
  yield takeLatest(itemsTypes.SAVE_ITEM, addItemHandler);
}
