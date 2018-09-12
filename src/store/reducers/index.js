import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import worksReducer from './worksReducer';
import workReducer from './workReducer';

const reducer = combineReducers({
	router: routerReducer,
	form: formReducer,
	works: worksReducer,
	work: workReducer
})

export default reducer;