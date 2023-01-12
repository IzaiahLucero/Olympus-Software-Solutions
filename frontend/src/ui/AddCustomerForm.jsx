import React from 'react';
import { useFormik } from 'formik';
import { Col, Container, Row } from 'react-bootstrap'
import { addCustomerSchema } from '../schemas/index.jsx'
import { httpConfig } from '../utils/http-config.js'

const onSubmit = (values) => {
  httpConfig.post("/apis/customer", values)
};


export const AddCustomerForm = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mailingAddress: "",
      mailingCity: "",
      mailingState: "",
      mailingZip: "",
      primaryEmail: "",
      secondaryEmail: "",
      primaryPhone: "",
      secondaryPhone: "",
    },
    validationSchema: addCustomerSchema,
    onSubmit,
    });



  console.log(errors)
  console.log(values)
  return (
    <Container>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Row>
          <Col>
            <label htmlFor="firstName">First Name</label>
            <input
                value={values.firstName}
                onChange={handleChange}
                id="firstName"
                type="text"
                placeholder="Enter Customers First Name"
                onBlur={handleBlur}
                className={errors.firstName && touched.firstName ? "input-error" : ""}
            />
            {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
          </Col>
          <Col>
            <label htmlFor="lastName">Last Name</label>
            <input
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="lastName"
              type="text"
              placeholder="Enter Customers Last Name."
              className={errors.lastName && touched.lastName ? "input-error" : ""}
            />
            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="mailingAddress">Mailing Address</label>
            <input
              value={values.mailingAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              id="mailingAddress"
              type="text"
              placeholder="Enter Mailing Address."
              className={errors.mailingAddress && touched.mailingAddress ? "input-error" : ""}
            />
            {errors.mailingAddress && touched.mailingAddress && <p className="error">{errors.mailingAddress}</p>}
          </Col>
          <Col>
            <label htmlFor="mailingCity">City</label>
            <input
              value={values.mailingCity}
              onChange={handleChange}
              onBlur={handleBlur}
              id="mailingCity"
              type="text"
              placeholder="Enter Mailing City."
              className={errors.mailingCity && touched.mailingCity ? "input-error" : ""}
            />
            {errors.mailingCity && touched.mailingCity && <p className="error">{errors.mailingCity}</p>}
          </Col>
          <Col>
            <label htmlFor="mailingState">State</label>
            <input
              value={values.mailingState}
              onChange={handleChange}
              onBlur={handleBlur}
              id="mailingState"
              type="text"
              placeholder="Enter Mailing State."
              className={errors.mailingState && touched.mailingState ? "input-error" : ""}
            />
            {errors.mailingState && touched.mailingState && <p className="error">{errors.mailingState}</p>}
          </Col>
          <Col>
            <label htmlFor="mailingZip">Zip Code</label>
            <input
              value={values.mailingZip}
              onChange={handleChange}
              onBlur={handleBlur}
              id="mailingZip"
              type="text"
              placeholder="Enter Mailing Zip."
              className={errors.mailingZip && touched.mailingZip ? "input-error" : ""}
            />
            {errors.mailingZip && touched.mailingZip && <p className="error">{errors.mailingZip}</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="primaryPhone">Primary Phone</label>
            <input
              value={values.primaryPhone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="primaryPhone"
              type="tel"
              placeholder="Enter your phone number."
              className={errors.primaryPhone && touched.primaryPhone ? "input-error" : ""}
            />
            {errors.primaryPhone && touched.primaryPhone && <p className="error">{errors.primaryPhone}</p>}
          </Col>
          <Col>
            <label htmlFor="secondaryPhone">Secondary Phone</label>
            <input
              value={values.secondaryPhone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="secondaryPhone"
              type="tel"
              placeholder="Enter your phone number."
              className={errors.secondaryPhone && touched.secondaryPhone ? "input-error" : ""}
            />
            {errors.secondaryPhone && touched.secondaryPhone && <p className="error">{errors.secondaryPhone}</p>}
          </Col>
        </Row>
        <Row >
          <Col>
            <label htmlFor="primaryEmail">Primary Email</label>
            <input
              value={values.primaryEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              id="primaryEmail"
              type="email"
              placeholder="Enter your email."
              className={errors.primaryEmail && touched.primaryEmail ? "input-error" : ""}
            />
            {errors.primaryEmail && touched.primaryEmail && <p className="error">{errors.primaryEmail}</p>}
          </Col>
          <Col>
            <label htmlFor="secondaryEmail">Secondary Email</label>
            <input
              value={values.secondaryEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              id="secondaryEmail"
              type="email"
              placeholder="Enter your email."
              className={errors.secondaryEmail && touched.secondaryEmail ? "input-error" : ""}
            />
            {errors.secondaryEmail && touched.secondaryEmail && <p className="error">{errors.secondaryEmail}</p>}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <button disabled={isSubmitting} type="submit"> Submit</button>
          </Col>
        </Row>
      </form>
    </Container>

  );
};

export default AddCustomerForm;