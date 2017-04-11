import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasicButton from '../components/basic-button'
import Header from '../components/header'

class Family extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='ph2 pb2 pt1'>
          <article
            className='mw6 mt0 center bg-white br3 pw3 ph2 pa4-ns mb3 ba b--black-10'
          >
            <div className='tc'>
              <img
                src='/parker-bear-orginal-painting.jpg'
                className='br-100 h3 w3 dib'
                title='Parker the Bear'
              />
              <h1 className='f4'>Hi xxx family!</h1>
              <hr className='mw3 bb bw1 b--black-10' />
            </div>
            <p className='lh-copy measure center f6 black-70'>
              Welcome to your very own Parker home page!
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
            <p className='lh-copy measure center f6 black-70'>
              Who wants to go first today?
            </p>
            <p className='lh-copy measure center f6 black-70'>
              Go to YOUR very own Parker page and lets have some fun!
            </p>
          </article>
          <article className='pa2 pa5-ns'>
            <h1 className='f4 ma0 bold center mw6'>Children</h1>
            <ul className='list pl0 ml0 center mw6 ba b--light-silver br2'>
              <li className='ph3 pv3 bb b--light-silver'>Jacob</li>
              <li className='ph3 pv3 bb b--light-silver'>Lilly</li>
            </ul>
          </article>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  family: state.family,
  children: state.children
})
const connector = connect(mapStateToProps)

export default connector(Family)
