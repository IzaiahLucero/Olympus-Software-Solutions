import { Navigation } from './Navigation.jsx'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

export function AddEmployee () {
  return (
    <>
      <Navigation/>
      <Container>
        <Row className="p-3">
          <Col>
            <h3>New Employee</h3>
          </Col>
        </Row>

        <Row className="p-3">
          <Col>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>Employee Number</Form.Label>
                <Form.Control type="text" placeholder="12345"/>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="John Smith"/>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row className="p-3">
          <Col>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Finance, Human Resources, etc."/>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Manager"/>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row className="p-3">
          <Col>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="sample@email.com"/>
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="505.555.5555"/>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row className="p-3 text-center">
          <Col>
            <Button href="AddEmployee">Submit</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddEmployee;