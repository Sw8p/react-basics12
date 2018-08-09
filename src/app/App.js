import React, { Component } from 'react'
import _ from 'lodash'

import { RowOffsetXs1 } from './components/RowOffsetXs1'
import { Header } from './components/Header'
import { Home } from './components/Home'

export class App extends Component {
  constructor(props){
    super();
    this.state = {
      brandName: 'Hello React !',
      color: 'default'
    }

    console.log("LIFECYCLE : ");
    console.log("constructor");
  }
  componentDidMount () {
    console.log("componentDidMount");
  }
  componentDidUpdate (prevProps, prevState) {
    console.log("componentDidUpdate : ", prevProps, prevState);
  }
  componentWillUnmount () {
    console.log("componentWillUnmount");
  }

  //call parent's func from Event's child
  handleGreet () {
    alert('Hello Child !')
  }

  //modify parent's state from Event on state's child...& modify prop to other child...
  handleChangebrand (newName) {
    this.setState({
      brandName : _.upperFirst(newName)
    })
  }

  handleChangeColor (newColor) {
    this.setState({
      color : newColor
    })
  }

  render () {
    const { brandName, color } = this.state
    const colorBootstrap = ["primary", "secondary", "success", "danger", "warning", "info", "dark"]
    return (
      <div className="container">
        <RowOffsetXs1>
          <Header
            colors={colorBootstrap}
            brandName={brandName}
            changeColor={(newColor) => this.handleChangeColor(newColor)}
          />
        </RowOffsetXs1>
        <RowOffsetXs1>
          <Home
            brandName={brandName}
            onGreet={this.handleGreet}
            changeBrand={(newName) => this.handleChangebrand(newName)}
            color={color}
          />
        </RowOffsetXs1>
      </div>
    )
  }
}
