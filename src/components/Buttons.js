import React from 'react'

export function SubmitButton(props) {
  return (
    <button 
      type="submit" 
      class={"btn " + props.buttonStyle}
      onClick={props.handleClick}>
      {props.labelName}
    </button>
  )
}

export function ActionButton(props) {
  return (
    <button 
      type="button" 
      class={"btn " + props.buttonStyle}
      onClick={props.handleClick}>
      {props.labelName}
    </button>
  )
}

