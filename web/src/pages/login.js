import React, {Component} from 'react'
import {connect} from 'react-redux'
import {pathOr, map, compose, filter, propEq} from 'ramda'
import TextField from '../components/input-text'
import BasicButton from '../components/basic-button'


const getFamilies = () => fetch('http://localhost:8080/family')
const getFamily = (id) => fetch('http://localhost:8080/family/' + id)

const currentFamily = (families, validate) => {
  const famMail = compose(
    filter(eMail => eMail === validate.eMail),
    map(fam => fam.eMail)
  )(families)

  const famPass = compose(
    filter(pass => pass === validate.password),
    map(fam => fam.password)
  )(families)

  const famEMail = famMail.pop()
  const famPassword = famPass.pop()

  if (validate.eMail === famEMail && validate.password === famPassword) {
    return famEMail
  }
}

//login access to this page does not bring family state so validate
//and family props are being used
const setFamily = (val, families) => {
  const famMail = compose(
    filter(eMail => eMail === val.eMail),
    map(fam => fam.eMail)
  )(families)
  const famEMail = famMail.pop()

  const foundFamily = filter(propEq('eMail', famEMail), families)
  const foundFamilyObjId = foundFamily.pop()._id

  return foundFamilyObjId
}


class Login extends Component {
  componentDidMount() {
    getFamilies()
      .then(res => res.json())
      .then(families => this.props.set(families))
  }

  render() {
    const props = this.props


    return(
      <div className='bg-light-green'>
      <h2>Login</h2>
      <form onSubmit={props.submit(props.validate, props.families, props.history, currentFamily(props.families, props.validate))}>
      <TextField label='E-Mail address'
                 value={pathOr('', ['validate', 'eMail'], props)}
                 onChange={props.validateEMail}
                 optional={false}
      />
      <TextField label='Password'
                        value={pathOr('', ['validate', 'password'], props)}
                        onChange={props.validatePassword}
                        optional={false}
                        help='Password must use...'
                        width='w-20'
      />
      <BasicButton>Login</BasicButton>
      <a className='link f6' href='#'
         onClick={e => props.history.goBack()}>Cancel</a>
      </form>
      <footer className="ph2-m ph6-l mid-gray ma2">
        <div className="tc mt3">
          <img className='h4 w4 ba b--black-05 pa2' src='/CPC-small-logo.png'
            alt='CPC small logo'/>
        </div>
      </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  families: state.families,
  validate: state.validate,
  logInFamily: state.logInFamily
})
const mapActionsToProps = (dispatch) => ({
  set: (families) => dispatch({type: 'SET_FAMILIES', payload: families}),
  validateEMail: (e) => dispatch({type: 'VALIDATE_EMAIL', payload: e.target.value}),
  validatePassword: (e) => dispatch({type: 'VALIDATE_PASSWORD', payload: e.target.value}),

  submit: (validate, families, history, famEMail) => (e) => {
    e.preventDefault()
    dispatch({type: 'SET_VALIDATION', payload: validate})

    getFamily(setFamily(validate, families)).then(res => res.json())
      .then(family => {
        dispatch({type: 'SET_LOGIN_FAMILY', payload: family})
        history.push('/family/' + family._id)
      })
      }

  })
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Login)
