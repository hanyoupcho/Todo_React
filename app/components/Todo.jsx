/*jshint esversion: 6 */
import React from 'react';

class Todo extends React.Component {
  render() {
    var {id, text, completed} = this.props;
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input name="completed" type="checkbox" checked={completed} readOnly/>
        {text}
      </div>
    );
  }
}

module.exports = Todo;
