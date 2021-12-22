import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRadio from "./FormRadio";

const regex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;

const deliveryMethods = [
  { value: "ems", label: "EMS" },
  { value: "post", label: "Post" },
  { value: "free", label: "Free" },
];

const paymentMethods = [
  { value: "card", label: "Card" },
  { value: "cash", label: "Cash" },
];

export default class FormikForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          userLastName: "",
          userFirstName: "",
          email: "",
          phoneNumber: "",
          city: "",
          address: "",
          comment: "",
          payment: "cash",
          date: "",
          delivery: "",
          terms: false,
        }}
        onSubmit={(values) => alert(JSON.stringify(values))}
        validationSchema={Yup.object().shape({
          userLastName: Yup.string()
            .required("last name is required")
            .max(20, "need less than 20"),
          userFirstName: Yup.string()
            .required("first name is required")
            .max(20, "need less than 20"),
          email: Yup.string()
            .email("Email should be in a correct format like 'email@mail.ru' ")
            .required("Email is required"),
          phoneNumber: Yup.string()
            .matches(regex, "need to enter only a number")
            .max(15, "need less than 15")
            .min(7, "need more than 7")
            .required("phone number is required"),
          city: Yup.string().required("city is required"),
          address: Yup.string().required("address is required"),
          payment: Yup.string().required("choose one of them"),
          date: Yup.date()
            .min(Date(), "The nearest delivery date from tomorrow")
            .required("Date is required"),
          delivery: Yup.string().required("delivery is required"),
          terms: Yup.boolean().isTrue("need accept"),
        })}
      >
        {({ isValid }) => (
          <Form>
            <fieldset className="personal-info">
              <legend>Personal Information</legend>
              <Field
                name="userLastName"
                label="Last Name"
                component={FormInput}
              />
              <Field
                name="userFirstName"
                label="First Name"
                component={FormInput}
              />
              <Field name="email" label="Email" component={FormInput} />
              <Field
                name="phoneNumber"
                label="Phone Number"
                component={FormInput}
              />
              <Field name="city" label="City" component={FormInput} />
              <Field name="address" label="Address" component={FormInput} />
            </fieldset>
            <div className="comment">
              <label>Comment</label>
              <Field as="textarea" name="comment" />
            </div>
            <fieldset>
              <legend>Choose a payment method</legend>
              <Field
                name="payment"
                component={FormRadio}
                options={paymentMethods}
              />
            </fieldset>
            <Field
              as="select"
              name="delivery"
              label="Choose a delivery method"
              component={FormSelect}
              options={deliveryMethods}
            />
            <div className="date">
              <Field
                type="date"
                name="date"
                label="Delivery Date"
                component={FormInput}
              />
            </div>
            <div>
              <Field
                type="checkbox"
                name="terms"
                id="terms"
                label="I accept the terms and conditions for
                signing up to this service, and hereby confirm I have read the privacy policy."
                component={FormInput}
              />
            </div>
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
