/*jshint esversion: 6 */
import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    //getInitialState
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the year'
        },
        {
          id: 3,
          text: 'Study React'
        },
        {
          id: 4,
          text: 'Play with the dog'
        }
      ]
    };
  }
  handleAddTodo(text) {
    alert('new todo: ' + text);
  }
  render() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

module.exports = TodoApp;
