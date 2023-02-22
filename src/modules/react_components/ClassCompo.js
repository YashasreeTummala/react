import React, { Component } from 'react'
import './Compo.css'
import Button from './Button.js'

export class ClassCompo extends Component {
  render() {
    return (
      <div className="clas">
        <h2>Class Component</h2>
        <Button name="Class Button"> </Button>
      </div>
    )
  }
}

export default ClassCompo