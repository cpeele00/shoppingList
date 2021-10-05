import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { itemsReducer } from '../features/shoppingList/state/shoppingList.reducer';
import { watcherSaga } from '../common/app/app.saga';

const reducer = combineReducers({
  items: itemsReducer,
});

const sagaMiddleWare = createSagaMiddleware(watcherSaga);
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

sagaMiddleWare.run(watcherSaga);

export default store;
