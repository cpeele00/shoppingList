import { all, call, spawn } from 'redux-saga/effects';
import { map } from 'lodash-es';
import * as sagas from '../common/sagas';

// Using ESNext modules here so we can loop over any sagas placed inside
// the "sagas" folder. This allows the app to grow as needed without having
// to hard code all of the sagas here.

export function* rootSaga() {
  yield all(
    map(sagas, saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (err) {
            // Todo: handle this better (error banner, log error, etc...)
            console.log(`error in rootSaga occurred: ${err}`);
          }
        }
      })
    )
  );
}
