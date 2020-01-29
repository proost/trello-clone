import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      uid: () => {
        return ''
      },
      userName: () => {
        return ''
      }
    }
  }

  render() {
    return (
      <Menu inverted stackable size='large'>
        <Menu.item>
          <img src="../static/trello-logo-blue.svg" alt="logo"/>
        </Menu.item> 
        <Menu.Item
          name='Boards'
          to="/Boards/"
        />
        <Menu.Menu position='right'>
          <Dropdown item text={this.state.userName}>
            <Dropdown.Menu>
              <Dropdown.Item>프로필</Dropdown.Item>
              <Dropdown.Item to="/">로그아웃</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}
