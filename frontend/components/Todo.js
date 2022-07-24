import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.toggle(this.props.key.id);
  }

  render() {
    
    return (
      
      <li onClick={this.handleClick}>
        {this.props.task} {this.props.completed ? '\u2713' : '' }
      </li>

    )
  }
}


{/* <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div> */}