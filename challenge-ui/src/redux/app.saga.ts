import { takeLatest } from 'redux-saga/effects';
import { getAllItemsHandler } from '../features/shoppingList/state/shoppingList.saga';
import { GET_ITEMS } from '../features/shoppingList/state/shoppingList.state';

export function* watcherSaga() {
  yield takeLatest(GET_ITEMS, getAllItemsHandler);
}
