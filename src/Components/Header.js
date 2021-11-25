import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../logo.svg';

const Header = (props) => {
  var links;
  if (props.selected === 'list')
    links = (
      <>
        {/* <NavDropdown title="방문 기록" id="basic-nav-dropdown">
          <NavDropdown.Item href="/list" className="selectedMenu">
            방문 기록: 리스트
          </NavDropdown.Item>
          <NavDropdown.Item href="/calendar">방문 기록: 달력</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="/list" className="selectedMenu">
          방문 기록: 리스트
        </Nav.Link>
        <Nav.Link href="/calendar">방문 기록: 달력</Nav.Link>
        <Nav.Link href="/add">추가하기</Nav.Link>
        <Nav.Link href="/search">검색하기</Nav.Link>
      </>
    );
  else if (props.selected === 'calendar')
    links = (
      <>
        <Nav.Link href="/list">방문 기록: 리스트</Nav.Link>
        <Nav.Link href="/calendar" className="selectedMenu">
          방문 기록: 달력
        </Nav.Link>
        <Nav.Link href="/add">추가하기</Nav.Link>
        <Nav.Link href="/search">검색하기</Nav.Link>
      </>
    );
  else if (props.selected === 'add')
    links = (
      <>
        <Nav.Link href="/list">방문 기록: 리스트</Nav.Link>
        <Nav.Link href="/calendar">방문 기록: 달력</Nav.Link>
        <Nav.Link href="/add" className="selectedMenu">
          추가하기
        </Nav.Link>
        <Nav.Link href="/search">검색하기</Nav.Link>
      </>
    );
  else
    links = (
      <>
        <Nav.Link href="/list">방문 기록: 리스트</Nav.Link>
        <Nav.Link href="/calendar">방문 기록: 달력</Nav.Link>
        <Nav.Link href="/add">추가하기</Nav.Link>
        <Nav.Link href="/search" className="selectedMenu">
          검색하기
        </Nav.Link>
      </>
    );
  return (
    <Navbar fixed="top" bg="light" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/" className="logo">
          <img
            alt=""
            src={logo}
            width="118"
            height="27"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="headertext">{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
