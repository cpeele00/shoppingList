import { call, put } from 'redux-saga/effects';
import { getAllItemsQuery } from '../../../common/queries/items.query';
import { actions } from './shoppingList.actions';
import { actions as uiActions } from '../../../common/app/state/ui/ui.actions';
import { addItemMutation } from '../../../common/mutations/items.mutation';

export function* getAllItemsHandler() {
  try {
    yield put(uiActions.isLoading(true));

    const result = yield call(getAllItemsQuery);

    const items = result?.data?.items;

    yield put(actions.setItems(items));
    // yield put(uiActions.status('success', 'Items successfully retrieved'));
  } catch (err) {
    console.log('error: ', err);
    yield put(uiActions.status('error', 'An error occurred attempting get items'));
  } finally {
    yield put(uiActions.isLoading(false));
  }
}

export function* addItemHandler(item) {
  try {
    yield put(uiActions.isProcessing(true));

    const result = yield call(addItemMutation, item.payload);
    const newItem = result?.data.addItem;

    if (newItem) {
      yield put(actions.addItem(newItem));
      yield put(uiActions.status('success', 'Item successfully added'));
    } else {
      yield put(uiActions.status('error', 'There was an issue with adding an item'));
    }
  } catch (err) {
    console.log('error: ', err);
    yield put(uiActions.status('error', 'An error occurred attempting to add item'));
  } finally {
    yield put(uiActions.isProcessing(false));
  }
}
