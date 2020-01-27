import React from 'react'

function cardWithHeader(props) {
  return (
    <div class="card">
      <div class="card-header">
        {props.header}
      </div>
      <div class="card-body">
        {props.body}
      </div>
    </div>
  )
}