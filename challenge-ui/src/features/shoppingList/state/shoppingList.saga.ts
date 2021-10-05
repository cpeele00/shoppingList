import { call, put } from 'redux-saga/effects';
import { getAllItemsQuery } from '../../../common/queries/shoppingList.query';
import { types } from './shoppingList.actions';
import { types as uiTypes } from '../../../common/app/state/ui/ui.actions';

export function* getAllItemsHandler() {
  try {
    yield put({ type: uiTypes.IS_LOADING, payload: true });
    const result = yield call(getAllItemsQuery);

    console.log(result?.data?.items);

    yield put({ type: types.SET_ITEMS, payload: result?.data?.items });
  } catch (err) {
    console.log('error: ', err);
  } finally {
    yield put({ type: uiTypes.IS_LOADING, payload: false });
  }
}
