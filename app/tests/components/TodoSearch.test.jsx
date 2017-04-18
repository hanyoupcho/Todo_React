/*jshint esversion: 6 */
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');


var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.setState({searchText: searchText});
    TestUtils.Simulate.change(todoSearch.searchTextInput);

    expect(spy).toHaveBeenCalledWith(false, 'dog');
  });

  it('should call onSearch with proper checked value', () => {
    var showCompleted = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.setState({showCompleted: showCompleted});
    TestUtils.Simulate.change(todoSearch.showCompletedInput);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
