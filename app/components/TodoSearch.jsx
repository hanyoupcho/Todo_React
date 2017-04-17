/*jshint esversion: 6 */
import React from 'react';

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: '', showCompleted: checked};

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({todoText: event.target.value});
    var searchTest = this.state.searchText;
    var

    this.props.onSearch(showCompleted, searchTest)
  }

  render() {
    return (
      <div>
        <div>
          <input type="search" value={this.state.searchText} ref={(input) => {this.searchTextInput = input;}} onChange={this.handleSearch} placeholder="Search todos"/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref={(input) => {this.showCompletedInput = input;}} onChange={this.handleSearch}/>
          </label>
        </div>
        </form>
      </div>
    );
  }
}

module.exports = TodoSearch;
