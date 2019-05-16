import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducer';
import rootSagas from '../Saga';

const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState = {}, history) {
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  // start sagas
  sagaMiddleware.run(rootSagas);

  // Extensions
  store.runSaga = sagaMiddleware.run;

  return { store };
}