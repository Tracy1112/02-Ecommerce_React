import React from 'react'

const FormCheckbox = ({ label, name, defaultValue, size, ariaLabel }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
        aria-label={ariaLabel || label}
      />
    </div>
  )
}

export default FormCheckbox
