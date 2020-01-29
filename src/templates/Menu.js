import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
  constructor(props) {
    super(props)

    this.addCard = this.addCard.bind(this)
    this.showMembers = this.showMembers.bind(this)
  }

  addCard(event) {

  }

  showMembers(event) {
    //local storage에서 들고 오지 말고 이미 갖고 있어야 될듯?
  }

  render() {
    return (
      <Menu stackable size='small'>
        <Menu.item name={this.state.boardName}/>
        <Menu.Item
          name='Add Card'
          onClick={this.addCard}
        />
        <Menu.Menu position='right'>
          <Menu.item
            name="Members"
            onClick={this.showMembers}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
