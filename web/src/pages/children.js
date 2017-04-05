import React, {Component} from 'react'
import {connect} from 'react-redux'
import {pathOr} from 'ramda'
import TextField from '../components/input-text'
import BasicButton from '../components/basic-button'


const postChildren = (children, id) => fetch('http://localhost:5000/children', {
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify(children, id)
})

const getChildren = (id) => fetch('http://localhost:5000/children' + id)

class Children extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      getChildren(this.props.match.params.id)
        .then(res => res.json())
        .then(children => this.props.set(children))

    }
  }

  render() {
    const props = this.props
    return(
      <div>
      <header className='tc'>
        <h2>Childrens Page</h2>
        <h3>Tell us about your family!</h3>
      </header>
      <hr />
      <form onSubmit={props.submit(props.history, props.children, props.family)}>
        <TextField
          label='Name'
          value={pathOr('', ['children', 'childName'],props)}
          onChange={props.onChangeName}
          optional={false}
        />
        <TextField
          label='Age'
          value={pathOr('', ['children', 'childAge'],props)}
          onChange={props.onChangeAge}
          optional={false}
          width='20'
        />
        <TextField
          label='Sex'
          value={pathOr('', ['children', 'childsSex'],props)}
          onChange={props.onChangeSex}
          optional={false}
          width='20'
        />
        <TextField
          label='Notes'
          value={pathOr('', ['children', 'childNotes'],props)}
          onChange={props.onChangeNotes}
          optional={false}
        />
        <BasicButton >Done!</BasicButton>
        <BasicButton >Enter another child</BasicButton>
        <a className='link f6' href='#'
           onClick={e => props.history.goBack()}>Cancel</a>
      </form>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  family: state.family,
  children: state.children
})
const mapActionsToProps = (dispatch) => ({
  set: (children) => dispatch({type: 'SET_CHILD', payload: children}),
  onChangeName: (e) => dispatch({type: 'SET_CHILD_NAME', payload: e.target.value}),
  onChangeAge: (e) => dispatch({type: 'SET_CHILD_AGE', payload: e.target.value}),
  onChangeSex: (e) => dispatch({type: 'SET_CHILD_SEX', payload: e.target.value}),
  onChangeNotes: (e) => dispatch({type: 'SET_CHILD_NOTES', payload: e.target.value}),
  submit: (history, children, family) => (e) => {
    e.preventDefault()
    postChildren(children, family.id).then(res => res.json()).then(res => {
      {dispatch({type: 'CLEAR_CHILDREN'})}
      history.push('/family')
    }).catch(err => console.log(err.message))
  }
})
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Children)
