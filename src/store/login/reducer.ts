import {
  UPDATE_ACCOUNT,
  UPDATE_PASSWORD,
  UPDATE_TOKEN,
  UPDATE_LOADING,
  UPDATE_LOADING_STATUS,
  LoginState,
  LoginActionTypes,
} from './types';
import Reactotron from 'reactotron-react-native';

export const initailState: LoginState = {
  account: 'jerry_liu',
  password: '1qaz@WSX',
  token: '',
  loading: false,
  loginStatus: '',
};

export function loginReducer(
  state = initailState,
  action: LoginActionTypes,
): LoginState {
  switch (action.type) {
    case UPDATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case UPDATE_LOADING_STATUS:
      return {...state, loginStatus: action.payload};
    default:
      return state;
  }
}
