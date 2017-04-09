import React from 'react'
import BasicButton from './basic-button'

const Welcome = props => {
  const txt = `Hi!  I'm Parker Bear.`
  const txt2 = `There are TWO great parks to play in so let's get started!`
  return (
    <div className='bg-white-80'>
      <ul className='list pl0 mt0 measure center'>
        <li className='flex items-center lh-copy pa1 ph0-l bb b--black-10'>
          <img
            src='/parker-bear-orginal-painting.jpg'
            className='br-100 h4 w4 dib ba b--black-05 pa2'
            alt='Parker Bear on swing'
          />
          <div className='pl3 flex-auto arial'>
            <h3 className='f2-ns f5 lh-copy-ns black-70'>{txt}</h3>
            <div className='dn db-ns'>
              <BasicButton>About Parker</BasicButton>
            </div>
            <span className='f5 db black-70'>
              Welcome to my playground app!
            </span>
            <p className='black-70 f6'>{txt2}</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Welcome
