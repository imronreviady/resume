import { GET_WORKS, SAVE_WORK } from '../actionTypes';
import { worksDb } from '../../firebase';

export function getWorks() {
	return dispatch => {
		worksDb.on('value', snapshot => {
			dispatch({
				type: GET_WORKS,
				payload: snapshot.val()
			});
		});
	}
}

export function saveWork(work) {
	console.log(work);
	return dispatch => worksDb.push(work);
}
