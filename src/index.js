import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { GlobalStyled } from './style/globall';

ReactDOM.render(
    // <React.StrictMode>
    <Fragment>
        <GlobalStyled />
        <App />
    </Fragment>,
    // </React.StrictMode>,
    document.getElementById('root')
);

