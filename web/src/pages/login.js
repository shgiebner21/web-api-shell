import React, {Component} from 'react'
import {connect} from 'react-redux'
import {pathOr} from 'ramda'
import TextField from '../components/input-text'
import BasicButton from '../components/basic-button'


class Login extends Component {

  render() {
    const props = this.props
    return(
      <div>
      <h2>Login</h2>
      <form onSubmit={props.submit(props.history, props.family)}>
      <TextField label='E-Mail address'
                 value={pathOr('', ['family', 'eMail'], props)}
                 onChange={props.validateEMail}
                 optional={false}
      />
      <TextField label='Password'
                        value={pathOr('', ['family', 'password'], props)}
                        onChange={props.validatePassword}
                        optional={false}
                        help='Password must use...'
                        width='w-20'
      />
      <BasicButton
        onClick={e => this.props.history.push('/family')}>Login</BasicButton>
      <a className='link f6' href='#'
                  onClick={e => props.history.goBack()}>Cancel</a>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  family: state.family
})
const mapActionsToProps = (dispatch) => ({
  validateEMail: (e) => dispatch({type: 'VALIDATE_EMAIL', payload: e.target.value}),
  validatePassword: (e) => dispatch({type: 'VALIDATE_PASSWORD', payload: e.target.value}),
  submit: (history, family) => (e) => {

  }
})
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Login)
