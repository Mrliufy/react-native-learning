import {demoReducer} from './demo/reducer';
import {loginReducer} from './login/reducer';
import {mainReducer} from './main/reducer';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import rootSaga from '../store/rootSaga';

import Reactotron from '../../ReactotronConfig';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  demo: demoReducer,
  login: loginReducer,
  main: mainReducer,
});

export type RootType = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    Reactotron.createEnhancer(),
  ),
);
sagaMiddleware.run(rootSaga);
