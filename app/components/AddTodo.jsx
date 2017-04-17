/*jshint esversion: 6 */
import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todoText: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({todoText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var todoText = this.state.todoText;

    if (todoText.length > 0) {
      this.setState({todoText: ''});
      this.props.onAddTodo(todoText);
    } else {
      this.todoTextInput.focus();
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todoText} ref={(input) => {this.todoTextInput = input;}} onChange={this.handleChange} placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

module.exports = AddTodo;
