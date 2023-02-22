import React from 'react'
import Button3 from './Button3'

function Button2(props) {
  return (
    <div>
        <button> {props.child} BUTTON 2 </button>
        <Button3 grandChild = {props.grandChild}/>
    </div>
  )
}

export default Button2