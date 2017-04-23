import {createStore, combineReducers} from 'redux'
import {set, lensProp} from 'ramda'



const family = (state=[], action) => {
  switch (action.type) {
    case 'SET_PARENT_FIRST':
      return set(lensProp('parentFirst'), action.payload, state)
      case 'SET_PARENT_LAST':
        return set(lensProp('parentLast'), action.payload, state)
      case 'SET_EMAIL':
        return set(lensProp('eMail'), action.payload, state)
      case 'SET_CELL':
        return set(lensProp('cellPhone'), action.payload, state)
      case 'SET_STREET':
        return set(lensProp('streetAddress'), action.payload, state)
      case 'SET_STREET2':
        return set(lensProp('streetAddress2'), action.payload, state)
      case 'SET_CITY':
        return set(lensProp('city'), action.payload, state)
      case 'SET_STATE':
        return set(lensProp('state'), action.payload, state)
      case 'SET_ZIP':
        return set(lensProp('zip'), action.payload, state)
      case 'SET_PASSWORD':
        return set(lensProp('password'), action.payload, state)
      case 'SET_FAMILY':
        return action.payload
    default:
      return state
  }
}

const logInFamily = (state=[], action) => {
  switch (action.type) {
    case 'SET_LOGIN_FAMILY':
      return action.payload
    default:
      return state
  }
}

const families = (state=[], action) => {
  switch (action.type) {
    case 'SET_FAMILIES':
      return action.payload
    default:
      return state
  }
}


const children = (state=[], action) => {
  switch (action.type) {
    case 'SET_CHILDREN':
      return action.payload
    case 'SET_CHILD_NAME':
      return set(lensProp('childName'), action.payload, state)
    case 'SET_CHILD_AGE':
      return set(lensProp('childAge'), action.payload, state)
    case 'SET_CHILD_SEX':
      return set(lensProp('childsSex'), action.payload, state)
    case 'SET_CHILD_NOTES':
      return set(lensProp('childNotes'), action.payload, state)
    case 'CLEAR_CHILDREN':
      return []
    default:
      return state
  }
}


const validate = (state=[], action) => {
  switch (action.type) {
    case 'SET_VALIDATION':
      return action.payload
    case 'VALIDATE_EMAIL':
      return set(lensProp('eMail'), action.payload, state)
    case 'VALIDATE_PASSWORD':
      return set(lensProp('password'), action.payload, state)
    default:
      return state
  }
}


const store = createStore(
  combineReducers({
    family,
    families,
    logInFamily,
    children,
    validate
  })
)

export default store
