import React from 'react'

export function BasicAlert(props) {
  return (
    <div class={"alert " + props.alertStyle} role="alert">
      {props.message}
    </div>
  )
}
