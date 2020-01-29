import React from 'react'

export const Wrapper = ({ children }) => {
  return (
    <div style={{ maxWidth: '1440px' }} className="w-100 ph6  pv7 center block">
      {children}
    </div>
  )
}
