import { GET_WORKS } from '../actionTypes';

export default function(state = {}, action) {
	switch(action.type) {
		case GET_WORKS:
			return action.payload;
		default:
			return state;
	}
}