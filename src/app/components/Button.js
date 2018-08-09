import React from 'react'

export const Button = ({ color }) => {
  return (
    <button
      className={"btn btn-"+color}
      type="button"
      style={{margin: .4 +'em'}}
    >
      {color}
    </button>
  )
}
