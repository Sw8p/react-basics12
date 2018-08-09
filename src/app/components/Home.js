import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      newBrandName: 'New Brand Name !'
    }
  }

  onChangeBrand () {
    this.props.changeBrand(this.state.newBrandName)
  }

  //changeBgColor (color) {
  //  if(color === "default"){
  //    return ("")
  //  }else{
  //    return ("text-light bg-"+color)
  //  }
  //}

  render (){
    const { brandName, onGreet, color } = this.props
    //const className = this.changeBgColor(color)
    const className = color === "default" ? "" : " text-light bg-"+color
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className={"container"+className}>
          <h1 className="display-4">Home Component in Fluid jumbotron</h1>
          <p className="lead">Click on button's menu for changing color</p>
          <h5>
            Alerte from parent component :
            <button className="btn btn-danger" onClick={onGreet}>Greet</button>
          </h5>
          <hr />
          <h5>
            Passing data from child to his parent :
            <button className="btn btn-warning" onClick={this.onChangeBrand.bind(this)}>{brandName}</button>
          </h5>
        </div>
      </div>
    )
  }
}
