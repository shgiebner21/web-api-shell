import React, {Component} from 'react'
import {connect} from 'react-redux'
import {pathOr} from 'ramda'
import TextField from '../components/input-text'
import BasicButton from '../components/basic-button'


const updateFamilyId = (family) => {
  return family.familyId = family.parentFirst + family.parentLast +
    family.eMail + family.cellPhone
}

const postFamily = (family) => fetch('http://localhost:8080/family', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(family)
  })


const putFamily = (family) => fetch('http://localhost:8080/family' + family.id, {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT',
  body: JSON.stringify(family)
})

class Signup extends Component {

  render() {
    const props = this.props
    return(
      <div className='bg-light-green'>
        <h2>Signup</h2>
        <form onSubmit={props.submit(props.history, props.family)}>
          <TextField label='Parent First Name'
                     value={pathOr('', ['family', 'parentFirst'], props)}
                     onChange={e => props.changeParentFirst(e.target.value)}
                     optional={false}
          />
          <TextField label='Parent Last Name'
                     value={pathOr('', ['family', 'parentLast'], props)}
                     onChange={props.changeParentLast}
                     optional={false}
          />
          <TextField label='E-Mail address'
                       value={pathOr('', ['family', 'eMail'], props)}
                       onChange={props.changeEMail}
                       optional={false}
          />
          <TextField label='Cell Phone'
                           value={pathOr('', ['family', 'cellPhone'], props)}
                           onChange={props.changeCell}
                           optional={false}
                           width='w-20'
          />
          <TextField label='Street Address'
                       value={pathOr('', ['family', 'streetAddress'], props)}
                       onChange={props.changeStreet}
                       optional={false}
          />
          <TextField label='Street Address2'
                       value={pathOr('', ['family', 'streetAddress2'], props)}
                       onChange={props.changeStreet2}
                       optional={true}
          />
          <TextField label='City'
                           value={pathOr('', ['family', 'city'], props)}
                           onChange={props.changeCity}
                           optional={false}
                           width='w-20'
          />
          <TextField label='State'
                           value={pathOr('', ['family', 'state'], props)}
                           onChange={props.changeState}
                           optional={false}
                           width='w-10'
          />
          <TextField label='Zip code'
                            value={pathOr('', ['family', 'zip'], props)}
                            onChange={props.changeZip}
                            optional={false}
                            width='w-20'
          />
          <TextField label='Password'
                            value={pathOr('', ['family', 'password'], props)}
                            onChange={props.changePassword}
                            optional={false}
                            help='Password must use...'
                            width='w-20'
          />
          <BasicButton backgroundColor="dark-blue"
                       color="white-80" >Signup</BasicButton>
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
  family: state.family
})
const mapActionsToProps = (dispatch) => ({
  set: (family) => dispatch({type: 'SET_FAMILY', payload: family}),
  changeParentFirst: First_Name => dispatch({type: 'SET_PARENT_FIRST', payload: First_Name}),
  changeParentLast: (e) => dispatch({type: 'SET_PARENT_LAST', payload: e.target.value}),
  changeEMail: (e) => dispatch({type: 'SET_EMAIL', payload: e.target.value}),
  changeCell: (e) => dispatch({type: 'SET_CELL', payload: e.target.value}),
  changeStreet: (e) => dispatch({type: 'SET_STREET', payload: e.target.value}),
  changeStreet2: (e) => dispatch({type: 'SET_STREET2', payload: e.target.value}),
  changeCity: (e) => dispatch({type: 'SET_CITY', payload: e.target.value}),
  changeState: (e) => dispatch({type: 'SET_STATE', payload: e.target.value}),
  changeZip: (e) => dispatch({type: 'SET_ZIP', payload: e.target.value}),
  changePassword: (e) => dispatch({type: 'SET_PASSWORD', payload: e.target.value}),
  submit: (history, family) => (e) => {
    e.preventDefault()

    if (family.length === 0 || family.parentFirst.length < 2 || family.parentLast.length < 2 || family.eMail.length < 2
        || family.password.length < 2) {
          return alert('Required data is missing.')
    } else if(family.id) {
      putFamily(family).then(res => res.json())
        .then(res => {
          dispatch({type: 'SET_FAMILY'})
          history.push('/family' + family.id)
        })
    } else {
      updateFamilyId(family)
      postFamily(family).then(res => res.json())
        .then(res => {
          dispatch({type: 'SET_FAMILY', payload: family})
          history.push('/children')
        })
    }
  }
})
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Signup)
