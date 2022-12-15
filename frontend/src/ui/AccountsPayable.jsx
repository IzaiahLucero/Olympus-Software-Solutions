import { Navigation } from './Navigation.jsx'
import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'

export function AccountsPayable () {
  return (
    <>
      <Navigation/>
      <Container>

        <Row className="p-3">
          <Col>
            <h3>Accounts Payable</h3>
          </Col>
        </Row>

        <Row className="text-center my-3">
          <Col xs={4}>
            <h5>Pending</h5>
            <p>$105.27</p>
          </Col>
          <Col xs={4}>
            <h5>Approved</h5>
            <p>$780.46</p>
          </Col>
          <Col xs={4}>
            <h5>Declined</h5>
            <p>$2,512.34</p>
          </Col>
        </Row>

        <Row className="text-center px-3">
          <Col>
            Vendor
          </Col>
          <Col>
            Invoice Date
          </Col>
          <Col>
            Ref. Number
          </Col>
          <Col>
            Amount
          </Col>
          <Col>
            Bill To
          </Col>
          <Col>
            Due Date
          </Col>
          <Col>
            Status
          </Col>
        </Row>
        {/*Sample Home Depot Invoice */}
        <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
          <Col>
            The Home Depot
          </Col>
          <Col>
            12/09/22
          </Col>
          <Col>
            1875632
          </Col>
          <Col>
            $105.27
          </Col>
          <Col>
            Hill Air Force Base
          </Col>
          <Col>
            12/25/22
          </Col>
          <Col>
            Pending
          </Col>
        </Row>
        {/*Sample Cintas Invoice*/}
        <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
          <Col>
            Cintas
          </Col>
          <Col>
            12/12/22
          </Col>
          <Col>
            79786525
          </Col>
          <Col>
            $65.12
          </Col>
          <Col>
            Gallup Area
          </Col>
          <Col>
            12/27/22
          </Col>
          <Col>
            Approved
          </Col>
        </Row>
        {/*Sample Shamrock Invoice*/}
        <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
          <Col>
            Shamrock Foods
          </Col>
          <Col>
            11/28/22
          </Col>
          <Col>
            65798624
          </Col>
          <Col>
            $2,512.34
          </Col>
          <Col>
            Schriever
          </Col>
          <Col>
            12/28/22
          </Col>
          <Col>
            Declined
          </Col>
        </Row>
        {/*Sample Home Depot Invoice */}
        <Row className="p-3 my-2 bg-light border border-1 rounded text-center align-items-center">
          <Col>
            The Home Depot
          </Col>
          <Col>
            12/01/22
          </Col>
          <Col>
            1875647
          </Col>
          <Col>
            $715.34
          </Col>
          <Col>
            Schriever
          </Col>
          <Col>
            12/16/22
          </Col>
          <Col>
            Approved
          </Col>
        </Row>

      </Container>
    </>
  )
}