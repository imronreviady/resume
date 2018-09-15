import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import worksReducer from './worksReducer';
import workReducer from './workReducer';
import certificatesReducer from './certificatesReducer';
import certificateReducer from './certificateReducer';

const reducer = combineReducers({
	router: routerReducer,
	form: formReducer,
	works: worksReducer,
	work: workReducer,
	certificates: certificatesReducer,
	certificate: certificateReducer
})

export default reducer;