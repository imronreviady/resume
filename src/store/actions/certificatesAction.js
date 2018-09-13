import { GET_CERTIFICATES, GET_CERTIFICATES_LOADED, GET_CERTIFICATES_LOADING, GET_CERTIFICATE, GET_CERTIFICATE_LOADED, GET_CERTIFICATE_LOADING, SAVE_CERTIFICATE } from '../actionTypes';
import { certificateDb } from '../../firebase';

export function saveCertificate(certificate) {
	return dispatch => {
		dispatch({
			type: SAVE_CERTIFICATE
		});
		certificateDb.push(certificate);
	};
}