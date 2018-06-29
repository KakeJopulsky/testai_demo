import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

const Header = ({ id, appName, date, testNames, totalTests, totalPass, changeCurr }) => {

  return (
    // <div className="header-container">

    //   <div className="left-header">
    //     <ul>
    //       <li className="app-name">{appName}</li>
    //       <li>Test id: {id}</li>
    //       <li>Test date: {date}</li>
    //     </ul>
    //   </div>

    //   <div className="right-header">
    //     <ul>
    //       <li>
    //         Select test: 
    //         <select onChange={changeCurr}>
    //           {testNames.map((test, i) => (
    //             <option value={i} key={i}>{test}</option>
    //           ))}
    //         </select>
    //       </li>
    //       <li>Total pass: {totalPass}</li>
    //       <li>Total fail: {totalTests - totalPass}</li>
    //       </ul>
    //   </div>

    //   </div>
    <div>
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
              <MenuItem eventKey={i}>{title}</MenuItem>
            ))}
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;