import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import worksReducer from './worksReducer';

const reducer = combineReducers({
	router: routerReducer,
	form: formReducer,
	works: worksReducer
})

export default reducer;