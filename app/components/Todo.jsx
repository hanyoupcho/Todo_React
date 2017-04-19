/*jshint esversion: 6 */
import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
  render() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? "todo todo-completed" : "todo";
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div className={todoClassName} onClick={() => {this.props.onToggle(id);}}>
        <div>
          <input name="completed" type="checkbox" checked={completed} readOnly/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
}

module.exports = Todo;
