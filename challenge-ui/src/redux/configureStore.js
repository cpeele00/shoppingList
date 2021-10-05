import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { itemsReducer } from '../features/shoppingList/state/shoppingList.state';
import { watcherSaga } from './app.saga';

const reducer = combineReducers({
  items: itemsReducer,
});

const sagaMiddleWare = createSagaMiddleware(watcherSaga);
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watcherSaga);

export default store;
