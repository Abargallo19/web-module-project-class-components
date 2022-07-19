import React from 'react'

import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      
        this.props.list.map(item => {
          return (<Todo key={item.id} toggle={this.props.toggle} task={item.name} /> )
        })
      
    )
  }
}
