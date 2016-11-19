export function getReducersList() {
	const SEND_FORM_DATA = 'send-form-data';
	const SUCCESS_RESPONSE = 'success-response';
	const FAILED_RESPONSE = 'failed-response';

	return {
		SEND_FORM_DATA: SEND_FORM_DATA,
		SUCCESS_RESPONSE: SUCCESS_RESPONSE,
		FAILED_RESPONSE: FAILED_RESPONSE,
	}
}

export function sendFormData(data){
	return {
		type: getReducersList().SEND_FORM_DATA,
		data
	}
}