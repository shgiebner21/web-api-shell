import React, {Component} from 'react'
import {connect} from 'react-redux'
import { pathOr } from 'ramda'
import TextField from '../components/input-text'
import BasicButton from '../components/basic-button'



class Login extends Component {
  render() {
    const props = this.props
    console.log('props are, ', props)


    return(
      <div>
        <div className='p1 pa2-ns bg-green white-80 tc'>
          <h2>Refill Request Admin</h2>
        </div>

        <div className='pa2' >
          <h3>Please Login:</h3>


          <form onSubmit={props.submit(props.validate, props.history) }>
            <TextField  label=' Username'
                        placeholder='your name here'
                        type='text'
                        value={ pathOr('', ['validate', 'username'], props) }
                        onChange={props.validateUsername}
                        optional={false}
                        width='30'
            />
            <h5 className='mt4' ></h5>
            <TextField  label='Password'
                        placeholder='p@sswErd'
                        type='password'
                        value={ pathOr('', ['validate', 'password'], props) }
                        onChange={props.validatePassword}
                        optional={false}
                        help='password must use...'
                        width='15'
            />

            <BasicButton>Login</BasicButton>

          </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  validate: state.validate
})
const mapActionsToProps = (dispatch) => ({
  submit: (validate, history) => (e) => {
    e.preventDefault()
    const headers = {}
    headers.Accept = 'application/json, text/plain, */*'
    headers.Authorization = 'Basic ' + btoa([validate.username, validate.password].join(':'))
    dispatch({ type: 'SET_VALIDATION', payload: validate })


  },
  validateUsername: (e) => dispatch({ type: 'VALIDATE_USERNAME', payload: e.target.value }),
  validatePassword: (e) => dispatch({ type: 'VALIDATE_PASSWORD', payload: e.target.value })
})


const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Login)
