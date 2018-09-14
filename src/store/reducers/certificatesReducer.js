import { GET_CERTIFICATES, GET_CERTIFICATES_LOADING, GET_CERTIFICATES_LOADED } from '../actionTypes';

export default function(state = {}, action) {
	switch(action.type) {
		case GET_CERTIFICATES:
			return {
				...state,
				data: action.payload
			};
		case GET_CERTIFICATES_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_CERTIFICATES_LOADED:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}