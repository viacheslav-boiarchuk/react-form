import commonReducer from './Reducers/CommonReducer';
import sendUserDataMiddleWare from '../MiddleWares/SendUserDataMiddleWare';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const initialState = {
	commonState: {
		loadingRequest: false,
		validationState: '',
		successLogin: false
	}
};

const reducer = combineReducers({
	commonState: commonReducer
});

const store = createStore(reducer, initialState, applyMiddleware(sendUserDataMiddleWare));

export default store;