import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Inner from './components/inner';

ReactDOM.render(< Inner />, document.getElementById('root'));

serviceWorker.unregister();
