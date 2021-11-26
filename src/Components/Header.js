import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../logo.svg';

const Header = (props) => {
  var links;
  if (props.selected === 'list')
    links = (
      <>
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="p"
            variant="link"
            className="selectedMenu navBut"
          >
            방문 기록
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/list" className="selectedItem">
              방문 기록: <b>리스트</b>
            </Dropdown.Item>
            <Dropdown.Item href="/calendar" className="unselectedItem">
              방문 기록: <b>달력</b>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link href="/add">추가하기</Nav.Link>
        <Nav.Link href="/search">검색하기</Nav.Link>
      </>
    );
  else if (props.selected === 'calendar')
    links = (
      <>
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="p"
            variant="link"
            className="selectedMenu navBut"
          >
            방문 기록
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/list" className="unselectedItem">
              방문 기록: <b>리스트</b>
            </Dropdown.Item>
            <Dropdown.Item href="/calendar" className="selectedItem">
              방문 기록: <b>달력</b>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link href="/add">추가하기</Nav.Link>
        <Nav.Link href="/search">검색하기</Nav.Link>
      </>
    );
  else if (props.selected === 'add')
    links = (
      <>
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="p"
            variant="link"
            className="unselectedMenu navBut"
          >
            방문 기록
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/list" className="unselectedItem">
              방문 기록: <b>리스트</b>
            </Dropdown.Item>
            <Dropdown.Item href="/calendar" className="unselectedItem">
              방문 기록: <b>달력</b>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link href="/add" className="selectedMenu">
          추가하기
        </Nav.Link>
        <Nav.Link href="/search">검색하기</Nav.Link>
      </>
    );
  else
    links = (
      <>
        <Dropdown>
          <Dropdown.Toggle
            bsPrefix="p"
            variant="link"
            className="unselectedMenu navBut"
          >
            방문 기록
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/list" className="unselectedItem">
              방문 기록: <b>리스트</b>
            </Dropdown.Item>
            <Dropdown.Item href="/calendar" className="unselectedItem">
              방문 기록: <b>달력</b>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link href="/add">추가하기</Nav.Link>
        <Nav.Link href="/search" className="selectedMenu">
          검색하기
        </Nav.Link>
      </>
    );
  return (
    <Navbar fixed="top" bg="light" expand="sm" className="header">
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="headertext">{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
