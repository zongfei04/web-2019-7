import { createStore, applyMiddleware } from 'redux'
import reduxcer from './reduxcer.js'
import thunk from 'redux-thunk';

const store = createStore(reduxcer, applyMiddleware(thunk))

export default store