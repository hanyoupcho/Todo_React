/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';

import TodoAPI from 'TodoAPI';

export class TodoList extends React.Component {
  render() {
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      var filetedTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filetedTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return filetedTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
