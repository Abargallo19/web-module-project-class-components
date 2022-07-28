import React from 'react'

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
  
    return (
      <ul>
      {
        this.props.list.map(item => {
           <Todo key={item.id} toggle={this.props.toggle} task={item.name} /> 
        })
      }
      </ul>
    )
  }
}
