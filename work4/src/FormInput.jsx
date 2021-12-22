import React from "react";
import PropTypes from "prop-types";

const FormInput = ({ form, field, label, type = "text", id = null }) => {
  const { errors, touched } = form;
  return (
    <div className="personal-info-item">
      <label htmlFor={field.name}>{label}</label>
      <input type={type} {...field} id={id} />
      {errors[field.name] && touched[field.name] ? (
        <p>{errors[field.name]}</p>
      ) : null}
    </div>
  );
};

FormInput.defaultProps = {
  id: null,
  type: PropTypes.string,
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default FormInput;
