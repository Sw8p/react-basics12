import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './Button'

export const Header = ({ colors, brandName, changeColor }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{brandName}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              {colors.map((color, k) => (
                <li className="nav-item"  key={k}>
                  <Button
                    className="nav-link"
                    value={color}
                    color={color}
                    onClickBtn={() => changeColor(color)}
                   />
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  brandName: PropTypes.string,
  changeColor: PropTypes.func
}
