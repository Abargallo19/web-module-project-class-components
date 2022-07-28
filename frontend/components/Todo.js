import React from 'react'

export default class Todo extends React.Component {
  // handleClick = () => {
  //   this.props.toggle(this.props.id);
  // }

  render() {
    
    return (
      
      <li onClick={() => toggleCompleted()}>
        {this.props.task} {this.props.completed ? '\u2713' : '' }
      </li>

    )
  }
}


{/* <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div> */}