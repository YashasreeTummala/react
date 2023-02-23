import React from 'react'
import Button2 from './Button2'

function Button1(props) {
  console.log(props)
  return (
    <div>
        <button onClick={()=> props.onChange("This is from CHILD")}> {props.parent} BUTTON 1 </button>
        <Button2 child = {props.child} grandChild = {props.grandChild}/>
    </div>
  )
}

export default Button1