import React, { Component } from 'react';
import TodoList from './TodoList';

/*
TodoMVC
add todo
display todos
cross off todo
show number of todos
filter all/active/complete
delete all complete
  only show if atleast only one is complete
button to toggle all on and off  
*/
export default class App extends Component {
  render() {
    return (
      <div>
      <h1>happy me </h1>
      <TodoList/>
      </div>
    )
  }
}
