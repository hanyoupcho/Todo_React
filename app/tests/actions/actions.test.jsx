/*jshint esversion: 6 */
var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Walk the dob'
    };

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: 111,
      text: 'aaaa',
      completed: false,
      completedAt: undefined,
      createdAt: 134
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '21'
    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

});
