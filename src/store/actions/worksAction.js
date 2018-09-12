import { GET_WORKS, SAVE_WORK } from '../actionTypes';
import { worksDb } from '../../firebase';

export function saveWork(work) {
	console.log(work);
	return dispatch => worksDb.push(work);
}
