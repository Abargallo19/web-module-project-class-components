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
      List: [

      ]
    }
  }

addTodo = (task) => {
  const newTask = {
    name: task,
    id: Date.now(),
    completed: false
  }

}





  render() {
    return (
      <div>
        Todo App
        <div> 
        <TodoList  />
        <Form />
        </div>
      </div>
    )
  }
}
