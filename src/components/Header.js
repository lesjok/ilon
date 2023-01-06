import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import corners from '../images/corners.png';
import '../styles/template.css';
import NaviBar from './NaviBar';

export default function Header() {

  return  (
    <Container>
      <Row>
        <Col md='5'>
          <Image src={corners} className="corners" />
        </Col>
        <Col md='7'>
          <NaviBar />
        </Col>
      </Row>
    </Container>
  )
}