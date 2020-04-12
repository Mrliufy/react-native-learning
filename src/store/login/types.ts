export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_LOADING = 'UPDATE_LOADING';

export interface UpdateAccountAction {
  type: typeof UPDATE_ACCOUNT;
  payload: string;
}

export interface UpdatePasswordAction {
  type: typeof UPDATE_PASSWORD;
  payload: string;
}

export interface UpdateTokenAction {
  type: typeof UPDATE_TOKEN;
  payload: string;
}

export interface FetchDataAction {
  type: typeof FETCH_DATA;
  payload?: object;
}

export interface UpdateLoadingAction {
  type: typeof UPDATE_LOADING;
  payload: boolean;
}

export interface LoginState {
  account: string;
  password: string;
  token: string;
  loading: boolean;
}

export type LoginActionTypes =
  | UpdateAccountAction
  | UpdatePasswordAction
  | UpdateTokenAction
  | UpdateLoadingAction;
