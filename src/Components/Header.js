import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = (props) => {
  var links;
  if (props.selected === 'list')
    links = (
      <>
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
    <Navbar>
      <Nav className="me-auto">{links}</Nav>
    </Navbar>
  );
};

export default Header;
