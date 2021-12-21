import React from "react";

const FormSelect = ({ form, field, label, options }) => {
  const { errors, touched } = form;

  return (
    <div className="delivery">
      <label htmlFor={field.name}>{label}</label>
      <select {...field} name={field.name}>
        <option disabled value="">
          ...
        </option>
        {options.map((i) => (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        ))}
      </select>
      {errors[field.name] && touched[field.name] ? (
        <p>{errors[field.name]}</p>
      ) : null}
    </div>
  );
};

export default FormSelect;
