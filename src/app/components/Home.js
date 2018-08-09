import React, { Component } from 'react'

import { Button } from './Button'

export class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      newBrandName: props.brandName
    }
  }

  onChangeBrand () {
    this.props.changeBrand(this.state.newBrandName)
  }

  handleInputChange (ev) {
    this.setState({
      newBrandName : ev.target.value
    })
  }
  handleInputFocus (ev) {
    ev.target.value = ""
  }

  //changeBgColor (color) {
  //  if(color === "default"){
  //    return ("")
  //  }else{
  //    return ("text-light bg-"+color)
  //  }
  //}

  render (){
    const { onGreet, color } = this.props
    //const className = this.changeBgColor(color)
    const className = color === "default" ? "" : " text-light bg-"+color
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className={"container"+className}>
          <h1 className="display-4">Home Component in Fluid jumbotron</h1>
          <p className="lead">Click on menu's button for changing background color</p>
          <h5>
            Alerte from parent component :
            <Button value="Greet" color="danger" onClickBtn={onGreet} />
          </h5>
          <hr />
          <h5>
            Passing data from child to his parent :
            <input
              type="text"
              value={this.state.newBrandName}
              onChange={(ev) => this.handleInputChange(ev)}
              onFocus={this.handleInputFocus}
            />
            <Button value="Send !" color="warning" onClickBtn={this.onChangeBrand.bind(this)} />
          </h5>
        </div>
      </div>
    )
  }
}
