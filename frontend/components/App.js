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
      list: [

      ]
    }
  }

addTodo = (task) => {
  const newTask = {
    name: task,
    id: Date.now(),
    completed: false
  };
  this.setState({
    list: [...this.state.list, newTask]
  })
}


toggleCompleted = (id) => {
  this.setState({
    list: this.state.list.map(task => {
      if (list.id === id){
        return {
          ...list, completed: !list.completed
        }
      }
      return list
    })
  })
}


clearCompleted = () => {
this.setState({
  list: this.state.list.filter(item => !item.completed)
})


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
