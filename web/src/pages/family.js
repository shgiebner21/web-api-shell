import React, {Component} from 'react'
import {connect} from 'react-redux'
import BasicButton from '../components/basic-button'


class Family extends Component {

  render() {
    return(
      <div className='ma2'>
      <h4>Hi xxx family!</h4>
      <h4>Welcome to your very own Parker home page!</h4>
      <h4>Who wants to go first today?</h4>
      <h4>Go to YOUR very own Parker page and lets have some fun!</h4>
      <hr />
      <BasicButton
        onClick={e => this.props.history.push('/child')}>Jacob</BasicButton>
      <BasicButton>Lilly</BasicButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  family: state.family,
  children: state.children
})
const connector = connect(mapStateToProps)

export default connector(Family)
