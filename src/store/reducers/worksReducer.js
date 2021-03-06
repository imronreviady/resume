import { GET_WORKS, GET_WORKS_LOADING, GET_WORKS_LOADED } from '../actionTypes';

export default function(state = {}, action) {
	switch(action.type) {
		case GET_WORKS:
			return {
				...state,
				data: action.payload
			};
		case GET_WORKS_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_WORKS_LOADED:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}