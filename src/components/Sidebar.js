import React from 'react'
import { Menu, Sidebar } from 'semantic-ui-react'

export function VerticalSideBar(props) {
  return (
    <Sidebar
      as={Menu}
      animation={props.animation}
      direction={props.direction}
      icon='labeled'
      vertical
      visible={props.visible}
      width='thin'/>
  )
}