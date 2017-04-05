import React from 'react'

const BasicButton = (props) => {
  return(
    <button
  onClick={props.onClick}
  className="f6 no-underline bg-light-blue bg-animate  hover-bg-black
     hover-white inline-flex items-center pa3 ba border-box mr4 br3">
  <span className="pl1">{props.children}</span>
</button>
  )
}

export default BasicButton
