import { createStore, applyMiddleware } from 'redux'
import reduxcer from './reduxcer.js'
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger'
//logger需要在开发环境中设置，在生产环境中不需要设置

const middlewares = [];
middlewares.push(thunk)

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const logger = createLogger({
  // ...options
});

const store = createStore(reduxcer, applyMiddleware(...middlewares))

export default store