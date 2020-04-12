import {
  UPDATE_PRODUCT_LIST,
  FETCH_PRODUCT_LIST_DATA,
  UPDATE_REFRESH_STATUS,
  FetchProductList,
  UpdateProductList,
  UpdateRefreshStatu,
} from './types';

export function updateProductList(params: []): UpdateProductList {
  return {
    type: UPDATE_PRODUCT_LIST,
    payload: params,
  };
}

export function fetchProductList(): FetchProductList {
  return {
    type: FETCH_PRODUCT_LIST_DATA,
  };
}

export function UpdateRefreshStatus(params: boolean): UpdateRefreshStatu {
  return {
    type: UPDATE_REFRESH_STATUS,
    payload: params,
  };
}
