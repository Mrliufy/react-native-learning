import {put, select, takeEvery} from 'redux-saga/effects';
import {FETCH_DATA} from './types';
import {updateToken, updateLoading} from './action';
import API from '../../utils/api';
import {CommonActions} from '@react-navigation/native';
const config = {nav: null};

export function setNavigation(param: any) {
  config.nav = param;
}

export function clearSetting(params: any) {
  config.nav = null;
}

export function* fetchData() {
  try {
    yield put(updateLoading(true));
    const state = yield select();
    const {account, password} = state.login;
    const param = {
      method: 'POST',
      path: 'a/account/login',
      param: {email: account, password: password},
      apiUrl: 'http://34.73.95.65/index.php?rt=',
    };
    const res = yield API(param);
    const {token} = res;
    if (token > '') {
      yield put(updateToken(token));
      config.nav.dispatch(CommonActions.navigate({name: 'Main'}));
    }
    yield put(updateLoading(false));
  } catch (error) {
    yield put(updateLoading(false));
  }
}

export function* loginSaga() {
  yield takeEvery(FETCH_DATA, fetchData);
}
