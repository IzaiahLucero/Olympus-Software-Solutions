import React from "react"
import { Navigation } from './Navigation'
import { Col, Container, Row } from 'react-bootstrap'

export function Customers () {
  return (
    <>
      <Navigation/>
      <Container>
        <Row className="p-3">
          <Col>
            <h3>Customers</h3>
          </Col>
        </Row>
        <Row className="px-3 text-center">
          <Col xs={1}>
            Customer #
          </Col>
          <Col xs={2}>
            Customer Name
          </Col>
          <Col xs={5}>
            Mailing Address
          </Col>
          <Col xs={2}>
            Phone
          </Col>
          <Col xs={2}>
            Email
          </Col>
        </Row>

        <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
          <Col xs={1}>
            2022-001
          </Col>
          <Col xs={2}>
            Joshua Sanchez
          </Col>
          <Col xs={5}>
            123 Main Street Southwest Albuquerque, NM 87123
          </Col>
          <Col xs={2}>
            505.555.1234
          </Col>
          <Col xs={2}>
            sanchez.joshua@outlook.com
          </Col>
        </Row>

        <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
          <Col xs={1}>
            2022-002
          </Col>
          <Col xs={2}>
            Ryan Swift
          </Col>
          <Col xs={5}>
            123 Coal Ave Sw Albuquerque, NM 87111
          </Col>
          <Col xs={2}>
            505.123-5544
          </Col>
          <Col xs={2}>
            r.swift@gmail.com
          </Col>
        </Row>

        <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
          <Col xs={1}>
            2022-001
          </Col>
          <Col xs={2}>
            Joshua Sanchez
          </Col>
          <Col xs={5}>
            123 Main Street Southwest Albuquerque, NM 87123
          </Col>
          <Col xs={2}>
            505.555.1234
          </Col>
          <Col xs={2}>
            izaiahlucero@outlook.com
          </Col>
        </Row>
      </Container>
    </>
  )
}