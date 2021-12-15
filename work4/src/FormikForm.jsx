import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

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
          delivery: {
            option: "post",
          },
          terms: false,
        }}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        <Form>
          <fieldset>
            <legend>Personal Information</legend>
            <div>
              <label>Last Name *</label>
              <Field name="userLastName" />
            </div>
            <div>
              <label>First Name *</label>
              <Field name="userFirstName" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" />
            </div>
            <div>
              <label>Phone Number *</label>
              <Field name="phoneNumber" />
            </div>
            <div>
              <label>City *</label>
              <Field name="city" />
            </div>
            <div>
              <label>Address *</label>
              <Field name="address" />
            </div>
          </fieldset>
          <div className="comment">
            <label>Comment</label>
            <Field as="textarea" name="comment" />
          </div>
          <div>
            <fieldset className="payment">
              <legend>Choose a payment method</legend>
              <div>
                <Field type="radio" name="payment" id="card" value="card" />
                <label htmlFor="card">Card</label>
              </div>
              <div>
                <Field type="radio" name="payment" id="cash" value="cash" />
                <label htmlFor="cash">Cash</label>
              </div>
            </fieldset>
          </div>

          <div className="delivery">
            <label>Choose a delivery method</label>
            <Field as="select" name="delivery">
              <option value="ems">EMS</option>
              <option value="post">Post</option>
              <option value="free">Free</option>
            </Field>
          </div>
          <div className="date">
            <label>Delivery Date</label>
            <Field type="date" name="date" />
          </div>
          <div>
            <label>Terms</label>
            <Field type="checkbox" name="terms" id="terms" />
          </div>
          <button>Submit</button>
          <p>* - required</p>
        </Form>
      </Formik>
    );
  }
}
