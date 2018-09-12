import { GET_WORK, GET_WORK_LOADING, GET_WORK_LOADED } from '../actionTypes';

export default function(state = {}, action) {
	switch(action.type) {
		case GET_WORK:
			return {
				...state,
				data: action.payload
			};
		case GET_WORK_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_WORK_LOADED:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}