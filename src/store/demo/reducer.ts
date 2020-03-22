import {UPDATE_TEXT, DemoActionTypes, DemoState} from './types.ts';
import Reactotron from 'reactotron-react-native';

export const initailState: DemoState = {
  text: 'Hello world!',
};

export function demoReducer(
  state = initailState,
  action: DemoActionTypes,
): DemoState {
  Reactotron.log(state, action);
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
}
