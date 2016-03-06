/*
 * @file app main file
 */

import 'babel-polyfill';
import 'bootstrap/scss/bootstrap.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import DeskMark from 'components/deskmark/deskmark';

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<DeskMark />, app);
