import {
  UPDATE_ACCOUNT,
  UPDATE_PASSWORD,
  UPDATE_TOKEN,
  UPDATE_LOADING,
  UPDATE_LOADING_STATUS,
  FETCH_DATA,
  UpdateAccountAction,
  UpdatePasswordAction,
  UpdateTokenAction,
  UpdateLoadingAction,
  FetchDataAction,
  UpdateLoginStatusAction,
} from './types';

export function updateAccount(params: string): UpdateAccountAction {
  return {
    type: UPDATE_ACCOUNT,
    payload: params,
  };
}

export function updatePassword(params: string): UpdatePasswordAction {
  return {
    type: UPDATE_PASSWORD,
    payload: params,
  };
}

export function updateToken(params: string): UpdateTokenAction {
  return {
    type: UPDATE_TOKEN,
    payload: params,
  };
}

export function updateLoading(params: boolean): UpdateLoadingAction {
  return {
    type: UPDATE_LOADING,
    payload: params,
  };
}

export function updateLoginstatus(params: string): UpdateLoginStatusAction {
  return {
    type: UPDATE_LOADING_STATUS,
    payload: params,
  };
}

export function fetchData(params?: any): FetchDataAction {
  return {
    type: FETCH_DATA,
    payload: params,
  };
}
