import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'

export function Navigation () {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Olympus Software Solutions</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Employees">Employees</Nav.Link>
            <Nav.Link href="Customers">Customers</Nav.Link>
            <Nav.Link href="AccountsPayable">Accounts Payable</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  )
}