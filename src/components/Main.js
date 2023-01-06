import React from 'react';
import '../styles/template.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function Main() {

  return  (
    <main class="main">
      <Container className="container">
        <Row className="main-row flex-direction-column flex-direction-lg-row">
          <Col lg='4' className="column-left">
            <button className="button" type="button">Начать путешествие</button>  
          </Col>
          <Col lg='5' className="advantages-container offset-3">
            <div className="advantages">
            <div className="advantage">
              Мы<span className="advantage-span">1</span> на рынке
            </div>
            <div className="advantage square-top-right">
              гарантируем
              <span className="advantage-span">50%</span>
              безопасность 
            </div>
            <div className="advantage square-bottom-right">
              календарик за
              <span className="advantage-span">2001</span>
              в подарок
            </div>
            <div className="advantage square-bottom-left">
              путешествие
              <span className="advantage-span">597</span>
              дней
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}