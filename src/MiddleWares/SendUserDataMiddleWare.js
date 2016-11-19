import {getReducersList} from '../Actions/ActionList';

const sendUserDataMiddleWare = store => next => {
	return action => {
		switch (action.type) {
			case getReducersList().SEND_FORM_DATA:
				fetch('http://localhost:9000/', {
					method:'POST',
					body: JSON.stringify(action.data)

				}).then(data => data.json()).then(
						data => {
							let convertData = JSON.parse(data);
							if (convertData.Auth === "Logged" && convertData.Language === "EN") {
								store.dispatch({
									type: getReducersList().SUCCESS_RESPONSE,
									data: data
								});
							}
							else {
								store.dispatch({
									type: getReducersList().FAILED_RESPONSE,
									data: data
								});
							}
						},
						data => {
							throw new Error(data);
						}
				);
				return next(action);
			default:
				return next(action);
		}
	};
};

export default sendUserDataMiddleWare;