/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

import TodoAPI from 'TodoAPI';

import './../playground/firebase/index';

// save
store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);

  TodoAPI.setTodos(state.todos);
});

// load
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
