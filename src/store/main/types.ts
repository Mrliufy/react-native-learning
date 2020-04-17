export const UPDATE_PRODUCT_LIST = 'UPDATE_PRODUCT_LIST';
export const FETCH_PRODUCT_LIST_DATA = 'FETCH_PRODUCT_LIST_DATA';
export const UPDATE_REFRESH_STATUS = 'UPDATE_REFRESH_STATUS';

export interface UpdateProductList {
  type: typeof UPDATE_PRODUCT_LIST;
  payload: [];
}

export interface FetchProductList {
  type: typeof FETCH_PRODUCT_LIST_DATA;
}

export interface UpdateRefreshStatu {
  type: typeof UPDATE_REFRESH_STATUS;
  payload: boolean;
}

export interface MainState {
  list: Array;
  refreshing: boolean;
}

export type MainActionTypes = UpdateProductList | UpdateRefreshStatu;
