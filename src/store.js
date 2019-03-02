import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import homeService from './pages/HomePage/service';

import homePageReducer from './pages/HomePage/reducer';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [applyMiddleware(sagaMiddleware)];

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const combinedReducer = combineReducers({
  homePageReducer,
});

const appReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const store = createStore(appReducer, composeEnhancers(...enhancers));

const combinedServices = [homeService];

combinedServices.forEach((service) => sagaMiddleware.run(service));

export default store;
