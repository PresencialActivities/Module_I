"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getDivision, getModule } from "../store/features/operations.slice";

export default function Home() {
  const dispatch = useDispatch();
  const operations = useSelector(state => state.operations);

  const [divisor, useDivisor] = useState(0);
  const [dividendo, useDividendo] = useState(0);

  const handleDivision = () => dispatch(getDivision({divisor, dividendo}));
  const handleModule = () => dispatch(getModule({divisor, dividendo}));

  return (
    <Container>
      <Row>
        <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupDivisor">
            <Form.Label>Divisor</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="" 
              onChange={event => useDivisor(event.target.value)}
              value={divisor}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupDividendo">
            <Form.Label>Dividendo</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="" 
              onChange={event => useDividendo(event.target.value)}
              value={dividendo}
            />
          </Form.Group>
        </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleDivision}>Calcular división</Button>{' '}
        </Col>
        <Col>
          <Button variant="secondary" onClick={handleModule}>Calcular módulo</Button>{' '}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>El valor de la división es: {operations.division}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>El valor del módulo es: {operations.module}</h2>
        </Col>
      </Row>
    </Container>
  );
}