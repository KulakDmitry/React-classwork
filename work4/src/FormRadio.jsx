import React from "react";
import PropTypes from "prop-types";
import FormSelect from "./FormSelect";

const FormRadio = ({ form, field, options }) => {
  const { errors, touched, setFieldValue } = form;

  const handle = (e) => {
    setFieldValue(field.name, e.target.value);
  };

  return (
    <>
      <div className="payment">
        {options.map((i) => (
          <div key={i.value}>
            <label htmlFor={i.value}>{i.label}</label>
            <input
              {...field}
              type="radio"
              name="payment"
              id={i.value}
              value={i.value}
              checked={i.value === field.value}
              onChange={handle}
            />
          </div>
        ))}
      </div>
      {errors[field.name] && touched[field.name] ? (
        <p>{errors[field.name]}</p>
      ) : null}
    </>
  );
};

FormSelect.defaultProps = { options: null };

FormRadio.propTypes = {
  options: PropTypes.array,
};

export default FormRadio;
