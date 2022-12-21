import React from 'react';
import { useFormik } from 'formik';
import { Col, Container, Row } from 'react-bootstrap'

export const AddCustomerForm = () => {
  const { values, handleBlur, handleChange } = useFormik({
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
    });

  console.log(values)
  return (
    <Container>
      <form autoComplete="off">
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
            />
          </Col>
          <Col>
            <label htmlFor="lastName">Last Name</label>
            <input
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
              type="text"
              placeholder="Enter Customers Last Name."
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="mailingAddress">Mailing Address</label>
            <input
              value={values.mailingAddress}
              onChange={handleChange}
              id="mailingAddress"
              type="text"
              placeholder="Enter Mailing Address."
            />
          </Col>
          <Col>
            <label htmlFor="mailingCity">City</label>
            <input
              value={values.mailingCity}
              onChange={handleChange}
              id="mailingCity"
              type="text"
              placeholder="Enter Mailing City."
            />
          </Col>
          <Col>
            <label htmlFor="mailingState">State</label>
            <input
              value={values.mailingState}
              onChange={handleChange}
              id="mailingState"
              type="text"
              placeholder="Enter Mailing State."
            />
          </Col>
          <Col>
            <label htmlFor="mailingZip">Zip Code</label>
            <input
              value={values.mailingZip}
              onChange={handleChange}
              id="mailingZip"
              type="text"
              placeholder="Enter Mailing Zip."
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label htmlFor="primaryPhone">Primary Phone</label>
            <input
              value={values.primaryPhone}
              onChange={handleChange}
              id="primaryPhone"
              type="tel"
              placeholder="Enter your phone number."
            />
          </Col>
          <Col>
            <label htmlFor="secondaryPhone">Secondary Phone</label>
            <input
              value={values.secondaryPhone}
              onChange={handleChange}
              id="secondaryPhone"
              type="tel"
              placeholder="Enter your phone number."
            />
          </Col>
        </Row>
        <Row >
          <Col>
            <label htmlFor="primaryEmail">Primary Email</label>
            <input
              value={values.primaryEmail}
              onChange={handleChange}
              id="primaryEmail"
              type="email"
              placeholder="Enter your email."
            />
          </Col>
          <Col>
            <label htmlFor="secondaryEmail">Secondary Email</label>
            <input
              value={values.secondaryEmail}
              onChange={handleChange}
              id="secondaryEmail"
              type="email"
              placeholder="Enter your email."
            />
          </Col>
        </Row>
      </form>
    </Container>

  );
};

export default AddCustomerForm;