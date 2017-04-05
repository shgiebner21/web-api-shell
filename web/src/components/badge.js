import React from 'react'

const Badge = (props) => {
  return(
    <div>
      <ul className="list pl0 mt0 measure center">
        <li
        className="flex items-center lh-copy pa1 ph0-l bb b--black-10">
        <img src='/parker-bear-orginal-painting.jpg'
        className='br-100 h4 w4 dib ba b--black-05 pa2' alt='Parker Bear on swing' />
        <div className="pl3 flex-auto">
        <span className="f6 db black-70">Park Ranger badge</span>
        </div>
        </li>
      </ul>
    </div>
  )
}

export default Badge
