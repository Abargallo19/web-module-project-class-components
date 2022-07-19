import React from 'react'

import TodoList from './TodoList';
import Form from './Form';

const testList = [
  {
    name: 'Allesandria project',
    id: Date.now(),
    completed: false
  },
  {
    name: 'wash dog',
    id: Date.now(),
    completed: false
  }
]


export default class App extends React.Component {

constructor(){
  super()
  this.state = {
    todolist: testList
  }
}


  render() {
    return (
      <div>
        Todo App
       <TodoLis
      </div>
    )
  }
}
