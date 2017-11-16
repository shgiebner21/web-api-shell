import {createStore, combineReducers} from 'redux'
import { set, lensProp } from 'ramda'


const validate = (state=[], action) => {
  switch (action.type) {
    case 'SET_VALIDATION':
      return action.payload
    case 'VALIDATE_USERNAME':
      return set(lensProp('username'), action.payload, state)
    case 'VALIDATE_PASSWORD':
      return set(lensProp('password'), action.payload, state)
    default:
      return state
  }
}

const defaultPharms = [
"grx_canyoncreek",
"grx_empathhealth",
"grx_entracell",
"grx_entracellpharmacy",
"grx_foo",
"grx_innovascript",
"grx_karerx",
"grx_libertypharmacy",
"grx_maplepharmacy",
"grx_med-carediabetics",
"grx_ocpharmacy",
"grx_pethealth",
"grx_raindrop",
"grx_ritecarepharmacy",
"grx_rxdirect",
"grx_rxngo",
"grx_rxplus",
"grx_salestest",
"grx_store1",
"grx_store2",
"grx_test",
"grx_womensinternational",
"grx_www"
]

const pharmacies = (state=defaultPharms, action) => {
  switch (action.type) {
    case 'SET_PHARMACIES':
      return action.payload
    default:
      return state
  }
}


const store = createStore(
  combineReducers({
    validate,
    pharmacies
  })
)

export default store
