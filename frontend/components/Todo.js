import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.toggle(this.props.key.id);
  }

  render() {
    return (
      <div>
        
      <li onClick={this.handleClick}>
        {this.props.task.name} {this.props.task.completed ? '\u2713' : '' }
      </li>

      </div>
    )
  }
}


{/* <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div> */}