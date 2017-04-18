/*jshint esversion: 6 */
import React from 'react';

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: '', showCompleted: false};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    var searchTextState = null;
    var showCompletedState = null;
    if (target.type === 'checkbox') {
      showCompletedState = target.checked;
    } else {
      searchTextState = target.value;
    }

    const searchText = (searchTextState !== null) ? searchTextState : this.state.searchText;
    const showCompleted = (showCompletedState !== null) ? showCompletedState : this.state.showCompleted;

    this.props.onSearch(showCompleted, searchText);
  }

  

  render() {
    return (
      <div>
        <div>
          <input name="searchText" type="search" value={this.state.searchText} ref={(input) => {this.searchTextInput = input;}} onChange={this.handleInputChange} placeholder="Search todos"/>
        </div>
        <div>
          <label>
            <input name="showCompleted" type="checkbox" checked={this.state.showCompleted} ref={(input) => {this.showCompletedInput = input;}} onChange={this.handleInputChange}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

module.exports = TodoSearch;
