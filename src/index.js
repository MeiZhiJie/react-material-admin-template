import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import { Router, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import routes from './routes';
import App from './containers/App';

import './styles.scss';
import 'font-awesome/css/font-awesome.css';
//import 'flexboxgrid/css/flexboxgrid.css';
import LoginPage from './containers/LoginPage';


import * as serviceWorker from './serviceWorker';
require('./favicon.ico');




//ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));
ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/login"><LoginPage/></Route>
        <Route path="/"><App/></Route>
      </Switch>
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
