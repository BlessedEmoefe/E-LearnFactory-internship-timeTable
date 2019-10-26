import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/componentFile/Container';
import Login from './components/componentFile/body/login/Login';
import Register from './components/componentFile/body/login/Register';
import RouterComponent from './components/componentFile/routes/RouterComponent';

ReactDOM.render(<RouterComponent />, document.getElementById('root'));
