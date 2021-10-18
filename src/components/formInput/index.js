import React from 'react';
import PropTypes from 'prop-types';
import './form-input.scss'

const FormInput = ({
  name,
  type,
  placeholder,
  className,
  value,
  invalid,
  label,
  searchActive,
  onChange,
  ...props
}) => {
  
  return (
    <React.Fragment>
      {/* <label htmlFor={name}>{label}</label> */}
      <input
        {...props}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        style={invalid && {border: 'solid 1px red'}}
      />
      { invalid && <p>{ invalid }</p>}
    </React.Fragment>
  )
}

FormInput.defaultProps = {
  type: "text",
  className: ""
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default FormInput;