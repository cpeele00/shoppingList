import { call, put } from 'redux-saga/effects';
import { getAllItemsQuery } from '../../../common/queries/shoppingList.query';
import { SET_ITEMS } from './shoppingList.state';

export function* getAllItemsHandler() {
  try {
    const result = yield call(getAllItemsQuery);

    console.log(result?.data?.items);

    yield put({ type: SET_ITEMS, payload: result?.data?.items });
  } catch (err) {
    console.log('error: ', err);
  }
}
