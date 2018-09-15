import { GET_CERTIFICATES, GET_CERTIFICATES_LOADED, GET_CERTIFICATES_LOADING, GET_CERTIFICATE, GET_CERTIFICATE_LOADED, GET_CERTIFICATE_LOADING, SAVE_CERTIFICATE } from '../actionTypes';
import { certificateDb } from '../../firebase';

export function getCertificates() {
	return dispatch => {
		dispatch({
			type: GET_CERTIFICATES_LOADING
		});
		certificateDb.on('value', snapshot => {
			dispatch({
				type: GET_CERTIFICATES,
				payload: snapshot.val()
			});
			dispatch({
				type: GET_CERTIFICATES_LOADED
			});
		});
	}
}

export function getCertificate(key) {
	return dispatch => {
		dispatch({
			type: GET_CERTIFICATE_LOADING
		});
		certificateDb.orderByKey().equalTo(key).on('value', snapshot => {
			dispatch({
				type: GET_CERTIFICATE,
				payload: snapshot.val()
			});
			dispatch({
				type: GET_CERTIFICATE_LOADED
			});
		});
	}
}

export function saveCertificate(certificate) {
	return dispatch => {
		dispatch({
			type: SAVE_CERTIFICATE
		});
		certificateDb.push(certificate);
	};
}