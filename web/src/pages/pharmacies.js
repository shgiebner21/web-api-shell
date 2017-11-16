import React, { Component } from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'

// http://application:Buzz0ffU@54.85.146.101:5984/
// https://couch.refillrequest.com:5984/_utils/_all_dbs

// headers: {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json, text/plain, */*',
//   'xsrfCookieName': 'XSRF-TOKEN',
//   'Authorization': 'Basic V0lQQ2xpZW50OkFjZUtpbmdRdWVlbg==',
//   'Username': 'WIPClient',
//   'Password': 'AceKingQueen'
// },
// method: 'GET'


// const getPharmacies = () => fetch('http://application:Buzz0ffU@54.85.146.101:5984/', {
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Authorization': 'Basic V0lQQ2xpZW50OkFjZUtpbmdRdWVlbg==',
//     'Content-Type': 'application/json',
//     'Cache-Control': 'no-cache',
//     'Username': 'WIPClient',
//     'Password': 'AceKingQueen'
//   },
//   method: 'GET',
// })


class Pharmacies extends Component {

  render() {
    const props = this.props
    console.log('pharmacies props are, ', props)

    const listPharmacies = (pharmacy) => {
      return <li className="ph3 pv3 bb b--light-silver">{pharmacy}</li>
    }


    return(
      <div>

        <div className='ml2 pa2-ns bg-green white-80 tc' >
          <h2>GRx Web Refill Admin Panel</h2>
        </div>

        <article className="pa3 pa2-ns">
          <h2 className="f4 bold center mw6">Pharmacies</h2>
            <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
              { map(listPharmacies, props.pharmacies) }
            </ul>
        </article>


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pharmacies: state.pharmacies
})
const mapActionsToProps = (dispatch) => ({
  set: (pharmacies) => dispatch({ type: 'SET_PHARMACIES', payload: pharmacies })
})

const connector = connect(mapStateToProps, mapActionsToProps)


export default connector(Pharmacies)
