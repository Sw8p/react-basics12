import React from 'react'

export const Button = ({ color, onClickBtn }) => {
  return (
    <button
      className={"btn btn-"+color}
      type="button"
      style={{margin: .4 +'em'}}
      onClick={onClickBtn}
    >
      {color}
    </button>
  )
}
