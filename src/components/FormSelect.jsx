import React from 'react'

const FormSelect = ({ label, name, list, defaultValue, size, required, ariaLabel }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
        required={required}
        aria-label={ariaLabel || label}
        aria-required={required}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormSelect
