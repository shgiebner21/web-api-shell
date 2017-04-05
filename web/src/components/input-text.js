import React from 'react'

const TextField = (props) => {
  const width = props.width ? `w-${props.width}` : 'w-80'

  return (
    <div className="measure">
      <label className='f6 b db mb2'>{props.label}
          {props.optional && <span className='normal black-60' >(optional)</span>}
      </label>
      <small>{props.help}</small>
      <input id={props.label}
             className={`input-reset ba b--black-20 pa2 mb2 db ${width}`}
             type='text'
             value={props.value}
             onChange={props.onChange}
      />
    </div>
  )
}

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  optional: React.PropTypes.bool,
  help: React.PropTypes.string,
  width: React.PropTypes.string
}

export default TextField
