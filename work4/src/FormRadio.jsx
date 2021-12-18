import React from "react";

const FormRadio = ({ form, field }) => {
  const { errors, touched, setFieldValue } = form;

  const paymentMethods = [
    { value: "card", label: "Card" },
    { value: "cash", label: "Cash" },
  ];

  return (
    <>
      <div className="payment">
        {paymentMethods.map((i) => (
          <div key={i.value}>
            <label htmlFor={i.value}>{i.label}</label>
            <input
              {...field}
              type="radio"
              name="payment"
              id={i.value}
              value={i.value}
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

export default FormRadio;
