import React, { Component } from 'react'
import './Compo.css'
import Button1 from './Button1.js'

export class ClassCompo extends Component {

  constructor() {
    super();
    this.state = {
      count :10
    }
  }

  render() {
    return (
      <div className="clas">
        <h2>Class Component</h2>
        <Button1 name="Class Button"> </Button1>
        <h2> {this.state.count} </h2>
        <button onClick={() => this.setState({count : this.state.count + 10})}> Update Count </button>
        
      </div>
    )
  }
}

export default ClassCompo