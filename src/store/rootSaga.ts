import {all} from 'redux-saga/effects';
import {loginSaga} from './login/saga';
import {mainSaga} from './main/saga';

export default function* rootSaga() {
  yield all([loginSaga(), mainSaga()]);
}
