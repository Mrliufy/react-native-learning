import {put, takeEvery, select} from 'redux-saga/effects';
import {FETCH_PRODUCT_LIST_DATA} from './types';
import {updateProductList, UpdateRefreshStatus} from './action';
import {updateLoading} from '../login/action';
import API from '../../utils/api';

export function* fetchData() {
  try {
    yield put(updateLoading(true));
    yield put(UpdateRefreshStatus(true));
    const param = {
      method: 'GET',
      path: 'a/product/resources',
      param: {product_id: 85},
      apiUrl: 'http://34.73.95.65/index.php?rt=',
    };
    const res = yield API(param);
    const {resources} = res;
    if (resources.length > 0) {
      yield put(updateProductList(resources));
    }
    yield put(updateLoading(false));
    yield put(UpdateRefreshStatus(false));
  } catch (error) {
    yield put(updateLoading(false));
    yield put(UpdateRefreshStatus(false));
  }
}

export function* mainSaga() {
  yield takeEvery(FETCH_PRODUCT_LIST_DATA, fetchData);
}
