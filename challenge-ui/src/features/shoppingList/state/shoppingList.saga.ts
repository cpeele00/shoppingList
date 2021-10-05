import { call, put } from 'redux-saga/effects';
import { getAllItemsQuery } from '../../../common/queries/shoppingList.query';
import { types } from './shoppingList.actions';

export function* getAllItemsHandler() {
  try {
    const result = yield call(getAllItemsQuery);

    console.log(result?.data?.items);

    yield put({ type: types.SET_ITEMS, payload: result?.data?.items });
  } catch (err) {
    console.log('error: ', err);
  }
}
