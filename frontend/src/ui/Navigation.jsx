import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'

export function Navigation () {
  return (
    <>
      <Navbar id="navigationBar">
        <Container>
          <Navbar.Brand href="#home" id="navBarText">efficiency</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link id="navBarText" href="/">Home</Nav.Link>
            <Nav.Link  id="navBarText" href="Employees">Employees</Nav.Link>
            <Nav.Link id="navBarText" href="Customers">Customers</Nav.Link>
            <Nav.Link id="navBarText" href="AddCustomer">Add Customer</Nav.Link>
            <Nav.Link id="navBarText" href="AccountsPayable">Accounts Payable</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>

  )
}