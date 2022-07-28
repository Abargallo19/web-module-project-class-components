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
    id: 7,
    completed: false
  }
]


export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      list: testList
    }
  }

addTodo = (task) => {
  const newTask = {
    name: task,
    id: Math.floor(Math.random() * 1000),
    completed: false
  }; 

  const newList = [...this.state.list, newTask]
  
  this.setState({
    list: newList
  })
}


toggleCompleted = (id) => {
  this.setState({
    list: this.state.list.map(task => {
      if (id === task.id){
        return {
          ...task, completed: !task.completed
        }
      }
      return task;
    })
  })
}

clearCompleted = () => {
  this.setState({
    ...this.state, list: this.state.list.filter(task => {
      return (task.completed === false)
    })
  })
  
}

  render() {
    // const { list } = this.state;
      
    return (
      <div>
        Todo App
        <TodoList
          toggle={this.toggleCompleted}
          list={this.state.list}
        />

        {/* <div>
          <ul>
            {
              list.map(todo => {
                return (<li> {todo.name}</li>)
            })
          }
          </ul>
        </div> */}
        
      
        <Form 
        addTodo= {this.addTodo}
        />
        
        <button onClick={this.clearCompleted} className= "clear">Clear Finished Tasks</button>
      </div>
    )
  }
}
