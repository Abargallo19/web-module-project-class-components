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
        {
          name: 'Allesandria project',
          id: Math.floor(Math.random() * 1000),
          completed: false
        },
        {
          name: 'wash dog',
          id: Math.floor(Math.random() * 1000),
          completed: false
        }

      ]
    }
  }

addTodo = (task) => {
  const newTask = {
    name: task,
    id: Math.floor(Math.random() * 1000),
    completed: false
  };
  this.setState({
    list: [...this.state.list, newTask]
  })
}


toggleCompleted = (id) => {
  this.setState({
    list: this.state.list.map(task => {
      if (task.id === id){
        return {
          ...list, completed: !list.completed
        }
      }
      return task
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
    const { list } = this.state;
    
    return (
      <div>
        Todo App
        <TodoList
          toggle={this.toggleCompleted}
          list={list}
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
        
        <div> 
      
        <Form 
        addTodo= {this.addTodo}
        />
        </div>
        <button onClick={this.clearCompleted} className= "clear">Clear Finished Tasks</button>
      </div>
    )
  }
}
