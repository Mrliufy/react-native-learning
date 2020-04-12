import {UPDATE_PRODUCT_LIST, UPDATE_REFRESH_STATUS} from './types';
import {MainActionTypes, MainState} from './types';
import Reactotron from 'reactotron-react-native';

export const initailState: MainState = {
  list: [
    {
      type_name: 'Xiaomi Mi A3',
    },
    {
      type_name: 'Xiaomi Mi A3',
    },
    {
      type_name: 'Xiaomi Mi A3',
    },
  ],
  refreshing: false,
};

export function mainReducer(
  state = initailState,
  action: MainActionTypes,
): MainState {
  switch (action.type) {
    case UPDATE_PRODUCT_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_REFRESH_STATUS:
      return {
        ...state,
        refreshing: action.payload,
      };
    default:
      return state;
  }
}
