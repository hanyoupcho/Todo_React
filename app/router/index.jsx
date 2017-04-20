/*jshint esversion: 6 */
import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import firebase from 'configureFirebase';

import TodoApp from 'TodoApp';
import Login from 'Login';

var requireLogin = (nextStage, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextStage, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path ="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
