import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { itemsReducer } from '../features/shoppingList/state/shoppingList.reducer';
import { rootSaga } from './app.saga';

const reducer = combineReducers({
  items: itemsReducer,
});

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

sagaMiddleWare.run(rootSaga);

export default store;
