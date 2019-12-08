import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reduxcer from './reduxcer.js'
import thunk from 'redux-thunk';


//logger需要在开发环境中设置，在生产环境中不需要设置

const middlewares = []
middlewares.push(thunk)

//配置logger信息
const logger = createLogger({
  // ...options
});

if (process.env.NODE_ENV === `development`) {
  // const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}
const store = createStore(reduxcer, applyMiddleware(...middlewares))

export default store