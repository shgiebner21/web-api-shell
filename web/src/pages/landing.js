import React, {Component} from 'react'
import {connect} from 'react-redux'
import Welcome from '../components/welcome'
import BasicButton from '../components/basic-button'


class LandingPage extends Component {
  render () {
    return (
      <div
        className='athelas vh-100 dt w-100 tc bg-dark-gray white cover'
        style={{ background: "url('/hampton-park-bandstand.jpg') no-repeat center", opacity: 0.9 }}
      >
        <div className='bg-black-50 vh-100 pb5 pb6-m pb7-l'>
          <header className='pa1'>
            <h2 className='f2 white-90 mw7 center tc'>
              Parker and Parks
            </h2>
          </header>
          <section>
            <Welcome />
            <div className='mt4 ml3'>
        <BasicButton onClick={e => this.props.history.push('/signup')}>Signup</BasicButton>
        <BasicButton onClick={e => this.props.history.push('/login')}>Login</BasicButton>
        </div>
        <div className='pa4 avenir'>
          <p className='f3'>
            Click the Signup or Login buttons to get started!
          </p>
        </div>
      </section>
      <footer className="ph2-m ph6-l mid-gray ma2">
        <div className="tc mt3">
          <img className='h4 w4 ba b--black-05 pa2' src='/CPC-small-logo.png'
            alt='CPC small logo'/>
        </div>
      </footer>

    </div>
  </div>
)
}
}

const mapStateToProps = (state => state)
const connector = connect(mapStateToProps)

export default connector(LandingPage)
