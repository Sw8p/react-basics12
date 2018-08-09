import React from 'react'
import PropTypes from 'prop-types'

export const RowOffsetXs1 = ({ children }) => {
  return (
    <div className="row">
      <div className="col offset-xs-1">
        {children}
      </div>
    </div>
  )
}

RowOffsetXs1.propTypes = {
  children: PropTypes.element
}
