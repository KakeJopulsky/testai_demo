import React from 'react';
import { Table } from 'react-bootstrap';

const Aside = ({ data }) => {
  return (
    <div className="aside-container">
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Test Case</th>
            <th>Launch time (ms)</th>
            <th>Memory (mb)</th>
            <th>CPU (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((test, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{test.launch_times[i]}</td>
              <td>{test.memory[i]}</td>
              <td>{test.cpu[i]}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  )
}

export default Aside;
