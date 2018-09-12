import { GET_WORKS, GET_WORKS_LOADED, GET_WORKS_LOADING, GET_WORK, GET_WORK_LOADED, GET_WORK_LOADING, SAVE_WORK } from '../actionTypes';
import { worksDb } from '../../firebase';

export function getWorks() {
	return dispatch => {
		dispatch({
			type: GET_WORKS_LOADING
		});
		worksDb.on('value', snapshot => {
			dispatch({
				type: GET_WORKS,
				payload: snapshot.val()
			});
			dispatch({
				type: GET_WORKS_LOADED
			});
		});
	}
}

export function getWork(key) {
	return dispatch => {
		dispatch({
			type: GET_WORK_LOADING
		});
		worksDb.orderByKey().equalTo(key).on('value', snapshot => {
			dispatch({
				type: GET_WORK,
				payload: snapshot.val()
			});
			dispatch({
				type: GET_WORK_LOADED
			});
		});
	}
}

export function saveWork(work) {
	console.log(work);
	return dispatch => worksDb.push(work);
}
