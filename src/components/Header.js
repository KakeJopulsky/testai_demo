import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

const Header = ({ id, appName, date, testNames, totalTests, totalPass, changeCurr }) => {

  return (
    <div className="header-container">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Dashboard</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <small>{appName}</small>
          </NavItem>
          <NavItem>
            <small>ID: {id}</small>
          </NavItem>
          <NavItem>
            <small>Date: {date}</small>
          </NavItem>
          <NavItem>
            <small>Pass: {totalPass}<Glyphicon glyph="ok" className="pass"/></small>
          </NavItem>
          <NavItem>
            <small>Fail: {totalTests - totalPass}<Glyphicon glyph="remove" className="fail"/></small>
          </NavItem>
          <NavDropdown onSelect={changeCurr} eventKey={3} title="Test Case" id="basic-nav-dropdown">
            {testNames.map((title, i) => (
              <MenuItem eventKey={i} key={i}>{title}</MenuItem>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;