import React, {Component} from 'react'
import {connect} from 'react-redux'
import Welcome from '../components/welcome'
import BasicButton from '../components/basic-button'


class LandingPage extends Component {
  render() {
    return(
      <div className='ma2'>
        <Welcome />
        <h4>If this is your first time using this app, please click the Sign Up button.</h4>
        <h4>If not, welcome back! and please click the Login button.</h4>
        <hr />
        <BasicButton onClick={e => this.props.history.push('/signup')}>Signup</BasicButton>
        <BasicButton onClick={e => this.props.history.push('/login')}>Login</BasicButton>
      </div>
    )
  }
}

const mapStateToProps = (state => state)
const connector = connect(mapStateToProps)

export default connector(LandingPage)
