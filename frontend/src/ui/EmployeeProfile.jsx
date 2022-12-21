import { Button, Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { Navigation } from './Navigation'
import Form from 'react-bootstrap/Form'

export function EmployeeProfile () {
  return (
    <>
      <Navigation/>

      <Container fluid id="primaryContainer" className="py-5">
        <Container id="secondaryContainer">
          <Row>
            <Col>
              <h3 id="titles">Employee Information</h3>
            </Col>
          </Row>
          <Row className="p-3">
            <Col xs={3}>
              <h5>First Name</h5>
              <h4 id="dataField">Izaiah</h4>
            </Col>
            <Col xs={3}>
              <h5>Last Name</h5>
              <h4 id="dataField">Lucero</h4>
            </Col>
            <Col xs={3}>
              <h5>Gender Identity</h5>
              <h4 id="dataField">Male</h4>
            </Col>
            <Col xs={3}>
              <h5>Birthday</h5>
              <h4 id="dataField">05/01/96</h4>
            </Col>

          </Row>

          <Row>
            <Col>
              <h3 id="titles">Address</h3>
            </Col>
          </Row>
          <Row className="p-3">
            <Col xs={6}>
              <h5>Street</h5>
              <h4 id="dataField">1234 Main Street NW</h4>
            </Col>
            <Col xs={3}>
              <h5>City</h5>
              <h4 id="dataField">Albuquerque</h4>
            </Col>
            <Col xs={1}>
              <h5>State</h5>
              <h4 id="dataField">NM</h4>
            </Col>
            <Col xs={2}>
              <h5>Zip</h5>
              <h4 id="dataField">87121</h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3 id="titles">Contact</h3>
            </Col>
          </Row>
          <Row className="p-3">
            <Col>
              <h5>Primary Email Address</h5>
              <h4 id="dataField">izaiahlucero@outlook.com</h4>
            </Col>
            <Col>
              <h5>Secondary Email Address</h5>
              <h4 id="dataField">izaiahlucero@outlook.com</h4>
            </Col>
            <Col>
              <h5>Primary Phone</h5>
              <h4 id="dataField">505.555.1234</h4>
            </Col>
            <Col>
              <h5>Seconday Phone</h5>
              <h4 id="dataField">505.555.1234</h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Company Information</h3>
            </Col>
          </Row>
          <Row className="p-3">
            <Col xs={3}>
              <h5>Status</h5>
              <h4 id="dataField">Active</h4>
            </Col>
            <Col xs={3}>
              <h5>Employee Number</h5>
              <h4 id="dataField">1000</h4>
            </Col>
            <Col xs={3}>
              <h5>Date Hired</h5>
              <h4 id="dataField">11/13/21</h4>
            </Col>
            <Col xs={3}>
              <h5>Termination Date</h5>
              <h4 id="dataField">XX/XX/XX</h4>
            </Col>
            <Col xs={4}>
              <h5>Department</h5>
              <h4 id="dataField">Finance</h4>
            </Col>
            <Col xs={4}>
              <h5>Title</h5>
              <h4 id="dataField">Finance Manager</h4>
            </Col>
            <Col xs={4}>
              <h5>Employment Type</h5>
              <h4 id="dataField">Full-Time</h4>
            </Col>
          </Row>

          <Row className="p-3 text-center">
            <Col>
              <Button href="AddEmployee">Save Changes</Button>
            </Col>
          </Row>
        </Container>
      </Container>


    </>
  )
}