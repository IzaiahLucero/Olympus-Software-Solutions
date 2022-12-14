import React, {useEffect} from "react"
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'


export function Home() {

  const dispatch = useDispatch()
  const initialEffects = () => {

  }
  useEffect(initialEffects, [dispatch])

  return (
        <>
          <Container fluid>
            <Row>
              <Col>
                <h1>Test</h1>
              </Col>
            </Row>
          </Container>
        </>
    )
}