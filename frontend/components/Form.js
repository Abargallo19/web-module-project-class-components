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

handleSubmit


  render() {
    return (
      <div>
        Form
      </div>
    )
  }
}
