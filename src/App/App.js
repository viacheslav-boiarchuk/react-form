import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import LoginForm from '../components/LoginForm/LoginForm';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <LoginForm/>
            </div>
        );
    }
}

export default App;
