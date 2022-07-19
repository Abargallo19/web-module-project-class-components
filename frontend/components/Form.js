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
  e.preventDefault();
  this.props.addTodo(this.state.input);
  this.setState({
    input: ''
  })
}


  render() {
    return (
      <div>
        Form
      </div>
    )
  }
}
