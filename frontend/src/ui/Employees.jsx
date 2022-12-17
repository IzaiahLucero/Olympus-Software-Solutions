import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { EmployeeBadge } from './EmployeeBadge.jsx'
import React from 'react'
import { Navigation } from './Navigation.jsx'

export function Employees() {
  return (
    <>
      <Navigation/>
        <Container>
          <Row className="p-3">
            <Col>
              <h3>Employees</h3>
            </Col>
            <Col xs={2}>
              <Button href="AddEmployee">Add Employee</Button>
            </Col>
          </Row>
          <Row className="px-3 text-center">
            <Col xs={1}>
              Employee #
            </Col>
            <Col xs={2}>
              Employee Name
            </Col>
            <Col xs={2}>
              Department
            </Col>
            <Col xs={2}>
              Title
            </Col>
            <Col xs={2}>
              Phone
            </Col>
            <Col xs={2}>
              Email
            </Col>
            <Col xs={1}>

            </Col>
          </Row>

          <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
            <Col xs={1}>
              1000
            </Col>
            <Col xs={2}>
              Izaiah Lucero
            </Col>
            <Col xs={2}>
              Finance
            </Col>
            <Col xs={2}>
              Finance Manager
            </Col>
            <Col xs={2}>
              505.555.1234
            </Col>
            <Col xs={2}>
              izaiahlucero@outlook.com
            </Col>
            <Col xs={1}>
              <Button href="EmployeeProfile">Manage</Button>
            </Col>
          </Row>

          <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
            <Col xs={1}>
              1001
            </Col>
            <Col xs={2}>
              Kelly Smith
            </Col>
            <Col xs={2}>
              Operations
            </Col>
            <Col xs={2}>
              Director of Operations
            </Col>
            <Col xs={2}>
              715.239.5555
            </Col>
            <Col xs={2}>
              smith.kelly@gmail.com
            </Col>
            <Col xs={1}>
              <Button href="AccountsPayable">Manage</Button>
            </Col>
          </Row>

          <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
            <Col xs={1}>
              1002
            </Col >
            <Col xs={2}>
              Elizabeth Trujillo
            </Col>
            <Col xs={2}>
              Human Resources
            </Col>
            <Col xs={2}>
               HR Manager
            </Col>
            <Col xs={2}>
              505.555.1234
            </Col>
            <Col xs={2}>
              elizabethtrujillo@icloud.com
            </Col>
            <Col xs={1}>
              <Button href="AccountsPayable">Manage</Button>
            </Col>
          </Row>
        </Container>
    </>
  )
}