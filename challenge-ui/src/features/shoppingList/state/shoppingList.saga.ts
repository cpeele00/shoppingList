import { call, put } from 'redux-saga/effects';
import { getAllItemsQuery } from '../../../common/queries/items.query';
import { actions } from './shoppingList.actions';
import { actions as uiActions } from '../../../common/app/state/ui/ui.actions';
import { addItemMutation, deleteItemMutation } from '../../../common/mutations/items.mutation';

export function* getAllItemsHandler() {
  try {
    yield put(uiActions.isLoading(true));

    const result = yield call(getAllItemsQuery);
    const items = result?.data?.items;

    yield put(actions.setItems(items));
  } catch (err) {
    console.log('error: ', err);
    yield put(uiActions.status('error', 'An error occurred attempting get items'));
  } finally {
    yield put(uiActions.isLoading(false));
  }
}

export function* addItemHandler({ type, payload }) {
  try {
    yield put(uiActions.isProcessing(true));

    const result = yield call(addItemMutation, payload);
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

export function* deleteItemHander({ type, payload }) {
  try {
    yield put(uiActions.isProcessing(true));

    const result = yield call(deleteItemMutation, payload);

    if (result?.data) {
      yield put(actions.removeItem(result?.data));
      yield put(uiActions.status('success', 'Item successfully deleted'));
    } else {
      yield put(uiActions.status('error', 'There was an issue with deleting an item'));
    }
  } catch (err) {
    console.log('error: ', err);
    yield put(uiActions.status('error', 'An error occurred attempting to delete an item'));
  } finally {
    yield put(uiActions.isProcessing(false));
  }
}
