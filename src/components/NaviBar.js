import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import '../styles/template.css';

export default function NaviBar() {

  return  (
    <>
    <Navbar fixed="top" collapseOnSelect expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="nav-menu flex-lg-row ml-auto">
        <Nav.Link><Link to="/" className="nav-link border-bottom-0">Главная</Link></Nav.Link>
        <Nav.Link><Link to="/" className="nav-link border-bottom-0">Технология</Link></Nav.Link>
        <Nav.Link><Link to="/" className="nav-link border-bottom-0">График полетов</Link></Nav.Link>
        <Nav.Link><Link to="/" className="nav-link border-bottom-0">Гарантии</Link></Nav.Link>
        <Nav.Link><Link to="/" className="nav-link border-bottom-0">О компании</Link></Nav.Link>
        <Nav.Link><Link to="/" className="nav-link border-bottom-0">Контакты</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  </>
  )
  
}
