import React, { Component } from 'react'
import { connect } from 'react-redux'
import BasicButton from '../components/basic-button'
import Header from '../components/header'

class Child extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='pa2'>
          <ul className='list pl0 mt0 measure center'>
            <li className='flex items-center lh-copy pa1 ph0-l bb b--black-10'>
              <img
                className='ba b--black-10 db br-100 w3 w3-ns h3 h3-ns'
                src='/parker-bear-orginal-painting.jpg'
                alt='Parker Bear on swing'
              />
              <div className='pl3 flex-auto'>
                <span className='f4 db black-70'>Hi Jacob!</span>
              </div>
            </li>
          </ul>
          <div class='dtc v-mid pl3'>
            <h4>Welcome to your very own Parker home page!</h4>
          </div>
          <hr />
          <h3>Jacobs Hampton Park activities:</h3>
          <div className='pl2'>
            <h4>Activities:</h4>
            <h4>Badges:</h4>
            <h4>Parker points:</h4>
            <h4>Family Rank:</h4>
            <h4>Park Rank:</h4>
            <h4>CPC Rank:</h4>
            <hr />
          </div>
          <div className=''>
            <a
              className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green'
              onClick={e => this.props.history.push('/hampton-park')}
              href='#0'
            >
              Hampton Park
            </a>
            <a
              className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green'
              href='#0'
            >
              Colonial Lake
            </a>
            <a
              className='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green'
              href='#0'
            >
              Lilly's Page
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapActionsToProps = dispatch => {
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Child)
