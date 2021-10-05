import { takeLatest } from 'redux-saga/effects';
import { getAllItemsHandler } from '../../features/shoppingList/state/shoppingList.saga';
import { types as itemsTypes } from '../../features/shoppingList/state/shoppingList.actions';

export function* watcherSaga() {
  yield takeLatest(itemsTypes.GET_ITEMS, getAllItemsHandler);
}
