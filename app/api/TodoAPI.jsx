/*jshint esversion: 6 */
var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) { //localStorage
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () { //localStrogae
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    if (showCompleted === false) {
      filteredTodos = filteredTodos.filter((todo) => {
        return !todo.completed;
      });
    }

    if (searchText.length > 0) {
      filteredTodos = filteredTodos.filter((todo) => {
        var text = todo.text.toLowerCase();
        return text.indexOf(searchText) > -1;
      });
    }//return searchText.length === 0 || text.indexOf(searchText) > -1;


    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    return filteredTodos;
  }
};
