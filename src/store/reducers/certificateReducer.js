import { GET_CERTIFICATE, GET_CERTIFICATE_LOADING, GET_CERTIFICATE_LOADED } from '../actionTypes';

export default function(state = {}, action) {
	switch(action.type) {
		case GET_CERTIFICATE:
			return {
				...state,
				data: action.payload
			};
		case GET_CERTIFICATE_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_CERTIFICATE_LOADED:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}