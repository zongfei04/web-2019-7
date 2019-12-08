// import { combineReducers } from 'redux'
import {combineReducers} from 'redux-immutable';

import {reduxcer as todolistReduxcer} from '../pages/todolist/store/index.js'

export default combineReducers({
	todolist:todolistReduxcer
})