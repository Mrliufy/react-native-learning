import {demoReducer} from './demo/reducer';
import {combineReducers, createStore} from 'redux';
import Reactotron from '../../ReactotronConfig';

const rootReducer = combineReducers({
  demo: demoReducer,
});

export type RootType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, Reactotron.createEnhancer());
