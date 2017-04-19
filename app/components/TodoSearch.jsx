/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';

var actions = require('actions');

export class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    var {dispatch} = this.props;
    const target = event.target;
    if (target.type === 'checkbox') {
      dispatch(actions.toggleShowCompleted());
    } else {
      dispatch(actions.setSearchText(target.value));
    }
  }

  render() {
    var {showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" value={searchText} onChange={this.handleInputChange} placeholder="Search todos"/>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={showCompleted} onChange={this.handleInputChange}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
