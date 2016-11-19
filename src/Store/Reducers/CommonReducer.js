import {getReducersList} from '../../Actions/ActionList';

export default function(state = [],action){
	switch (action.type) {
		case getReducersList().SEND_FORM_DATA:
			return {
				...state,
				validationState: '',
				loadingRequest: true
			};
		case getReducersList().SUCCESS_RESPONSE:
			return {
				...state,
				validationState: '',
				loadingRequest: false,
				successLogin: true
			};
		case getReducersList().FAILED_RESPONSE:
			return {
				...state,
				validationState: 'error',
				loadingRequest: false
			};
		default:
			return {...state}
	}
}