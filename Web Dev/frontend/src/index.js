import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Inner from './components/inner';
import Front from './components/front'
ReactDOM.render(< Front/>, document.getElementById('root'));

serviceWorker.unregister();
