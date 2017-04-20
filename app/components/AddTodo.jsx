/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';

var actions = require('actions');

export class AddTodo extends React.Component {
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
    var {dispatch} = this.props;
    var todoText = this.state.todoText;

    if (todoText.length > 0) {
      this.setState({todoText: ''});
      console.log(todoText);
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.todoTextInput.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todoText} ref={(input) => {this.todoTextInput = input;}} onChange={this.handleChange} placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}


export default connect()(AddTodo);
