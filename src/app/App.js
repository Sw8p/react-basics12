import React, { Component } from 'react'

import { RowOffsetXs1 } from './components/RowOffsetXs1'
import { Header } from './components/Header'
import { Home } from './components/Home'

export class App extends Component {
  constructor(props){
    super();
    this.state = {
      brandName: 'Hello React !'
    }
  }

  //call parent's func from Event's child
  handleGreet () {
    alert('Hello Child !')
  }

  //modify parent's state from Event on state's child...& modify prop to other child...
  handleChangebrand (newName) {
    this.setState({
      brandName : newName
    })
  }

  render () {
    const colorBootstrap = ["primary", "secondary", "success", "danger", "warning", "info", "dark"]
    return (
      <div className="container">
        <RowOffsetXs1>
          <Header colors={colorBootstrap} brandName={this.state.brandName} />
        </RowOffsetXs1>
        <RowOffsetXs1>
          <Home
            brandName={this.state.brandName}
            onGreet={this.handleGreet}
            changeBrand={(newName) => this.handleChangebrand(newName)}
          />
        </RowOffsetXs1>
      </div>
    )
  }
}
