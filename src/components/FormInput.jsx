const FormInput = ({ label, name, type, defaultValue, size, required, ariaLabel }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        required={required}
        aria-label={ariaLabel || label}
        aria-required={required}
      />
    </div>
  )
}
export default FormInput
