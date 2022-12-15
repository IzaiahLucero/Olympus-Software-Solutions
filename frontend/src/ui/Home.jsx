import React, {useEffect} from "react"
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { EmployeeBadge } from './EmployeeBadge.jsx'
import { Navigation } from './Navigation.jsx'


export function Home() {

  const dispatch = useDispatch()
  const initialEffects = () => {

  }
  useEffect(initialEffects, [dispatch])

  return (
        <>
          <Navigation/>
          <Container>
            <Row className="p-3">
              <Col>
                <h3>Dashboard</h3>
              </Col>
            </Row>
          </Container>
        </>
    )
}