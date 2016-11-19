import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Form,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
import {sendFormData} from '../../Actions/ActionList';

class LoginForm extends Component {

	constructor(args){
		super(...args);
		this.state = {
			nameFieldValue: 'Jane',
			passFieldValue: 'Password'
		}
	}

	setFieldValue = (e) => {
		const {id, value} = e.target;
		this.setState({[id]: value});
	};

	sendFormData = (e) => {
		e.preventDefault();
		this.props.sendFormData({
			name: this.state.nameFieldValue,
			password: this.state.passFieldValue
		});
	};

	render() {
		let {nameFieldValue, passFieldValue} = this.state;
		let {loadingRequest, validationState, successLogin} = this.props.commonState;
		return(
				<div>
					{(successLogin === true) ?
							<p>Succesful logged!</p>
							:
							<Form className="login-form">
								<FormGroup validationState={validationState === 'error' ? "error" : null} controlId="nameFieldValue">
									<ControlLabel>Name</ControlLabel>
									{' '}
									<FormControl type="text" bsClass="form-control login-form__name-field" value={nameFieldValue} onChange={this.setFieldValue} />
								</FormGroup>
								{' '}
								<FormGroup controlId="passFieldValue">
									<ControlLabel>Email</ControlLabel>
									{' '}
									<FormControl type="password" bsClass="form-control login-form__pass-field"  value={passFieldValue} onChange={this.setFieldValue} />
								</FormGroup>
								{' '}
								{(loadingRequest === false) ?
										<Button type="submit" onClick={this.sendFormData}>
											Login
										</Button>:
										<Button type="submit" onClick={this.sendFormData}>
											Loading
										</Button>
								}
							</Form>
					}
				</div>
		)
	}
}

export default connect(
	state => ({
		commonState: state.commonState
	}),
	{sendFormData}
)(LoginForm);