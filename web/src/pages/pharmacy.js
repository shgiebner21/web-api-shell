import React, { Component } from 'react'
import { connect } from 'react-redux'


class Pharmacy extends Component {
  render() {
    return(

    )
  }
}

const mapStateToProps = (state => state)
const connector = connect(mapStateToProps)

export default connector(Pharmacy)
