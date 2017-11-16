import React from 'react'
import PropTypes from 'prop-types'


const TextField = (props) => {
  const width = props.width ? `w-${props.width}` : 'w-80'

  return (
    <div>
      <label className='f5 b db mb2'>
        {props.label}
        {props.optional && <span className='normal black-60' >(optional)</span> }
      </label>
      <small>{props.help}</small>

      <input  id={props.label}
              className={`input-reset ba b--black-20 pa2 mb2 db ${width}`}
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.onChange}
      />
    </div>
  )
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  optional: PropTypes.bool,
  help: PropTypes.string,
  width: PropTypes.string
}

export default TextField
