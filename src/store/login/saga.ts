import {put, select, takeEvery} from 'redux-saga/effects';
import {FETCH_DATA, GET_LOGIN_INFO} from './types';
import {
  updateToken,
  updateLoading,
  updateLoginstatus,
  updatePassword,
  updateAccount,
} from './action';
import API from '../../utils/api';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {getItem, saveItem} from '../../utils/storage';
const config = {nav: null};
const ACCOUNT = 'account';
const PASSWORD = 'password';

export function setNavigation(param: any) {
  config.nav = param;
}

export function clearSetting(params: any) {
  config.nav = null;
}

export function* fetchData() {
  try {
    // yield put(updateLoading(true));
    yield put(updateLoginstatus('login'));
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
      yield saveItem(ACCOUNT, account);
      yield saveItem(PASSWORD, password);
      config.nav.dispatch(CommonActions.navigate({name: 'Main'}));
    } else {
      yield delay(2000);
      yield put(updateLoginstatus('failed'));
    }
    yield put(updateLoading(false));
  } catch (error) {
    yield put(updateLoading(false));
  }
}

export function* getAccountInfo() {
  try {
    const account = yield getItem('account');
    const password = yield getItem('password');
    if (account > '' && password > '') {
      yield updateAccount(account);
      yield updatePassword(password);
      config.nav.dispatch(CommonActions.navigate({name: 'Main'}));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* delay(params: number) {
  yield new Promise(resolve => setTimeout(resolve, params || 2000));
}

export function* loginSaga() {
  yield takeEvery(FETCH_DATA, fetchData);
  yield takeEvery(GET_LOGIN_INFO, getAccountInfo);
}
