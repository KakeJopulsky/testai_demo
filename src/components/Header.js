import React from 'react';

const Header = ({ id, appName, date, testNames, totalTests, totalPass, changeCurr }) => {

  return (
    <div className="header-container">

      <div className="left-header">
        <ul>
          <li className="app-name">{appName}</li>
          <li>Test id: {id}</li>
          <li>Test date: {date}</li>
        </ul>
      </div>

      <div className="right-header">
        <ul>
          <li>
            Select test: 
            <select onChange={changeCurr}>
              {testNames.map((test, i) => (
                <option value={i} key={i}>{test}</option>
              ))}
            </select>
          </li>
          <li>Total pass: {totalPass}</li>
          <li>Total fail: {totalTests - totalPass}</li>
          </ul>
      </div>

      </div>
  );
}

export default Header;