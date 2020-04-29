export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const FETCH_DATA = 'FETCH_DATA';
export const GET_LOGIN_INFO = 'GET_LOGIN_INFO';
export const UPDATE_LOADING = 'UPDATE_LOADING';
export const UPDATE_LOADING_STATUS = 'UPDATE_LOADING_STATUS';

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

export interface GetLoginInFoAction {
  type: typeof GET_LOGIN_INFO;
  payload?: null;
}

export interface UpdateLoadingAction {
  type: typeof UPDATE_LOADING;
  payload: boolean;
}

export interface UpdateLoginStatusAction {
  type: typeof UPDATE_LOADING_STATUS;
  payload: string;
}

export interface LoginState {
  account: string;
  password: string;
  token: string;
  loading: boolean;
  loginStatus: String;
}

export type LoginActionTypes =
  | UpdateAccountAction
  | UpdatePasswordAction
  | UpdateTokenAction
  | UpdateLoadingAction
  | UpdateLoginStatusAction;
