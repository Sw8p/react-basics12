import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ value, color, onClickBtn }) => {
  return (
    <button
      className={"btn btn-"+color}
      type="button"
      style={{margin: .4 +'em'}}
      onClick={onClickBtn}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string,
  onClickBtn: PropTypes.func
}
