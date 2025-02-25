import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

handleChange = e => {
  this.setState({
    ...this.state, input: e.target.value
  })
}



handleSubmit = e => {
  console.log(this.props)
  e.preventDefault();
  this.props.addTodo(this.state.input);
  this.setState({
    input: ''
  })
}




  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
     
        <input 
        type= "text"
        name= "task"
        onChange= {this.handleChange}
        value= {this.state.input}
        />
        <button className = "add-todo">Add New Todo</button>
        
    
      </form>
    )
    
  }
}
