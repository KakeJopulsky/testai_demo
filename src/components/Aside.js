import React from 'react';
import { Table, Glyphicon } from 'react-bootstrap';

const Aside = ({ data, testPass }) => {
  let avgCPU = data.cpu.reduce((acc, cur) => acc + cur) / data.cpu.length;
  let avgMEM = data.memory.reduce((acc, cur) => acc + cur) / data.memory.length;
  let avgLAUNCH = data.launch_times.reduce((acc, cur) => acc + cur) / data.launch_times.length;

  return (
    <div className="aside-container">
      <h3 className="test-name">{data.step_name}</h3>
      {testPass 
          ?  (<h4 className="status">Pass <Glyphicon glyph="ok" className="pass"/></h4>)
          :  (<h4 className="status">Fail <Glyphicon glyph="remove" className="fail"/></h4>)
      }
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
          {data.cpu.map((test, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{data.launch_times[i]}</td>
              <td>{data.memory[i]}</td>
              <td>{data.cpu[i]}</td>
            </tr>
          ))}
            <tr>
              <td>avg</td>
              <td>{Math.round(avgLAUNCH * 10) / 10} ms</td>
              <td>{Math.round(avgMEM)} mb</td>
              <td>{Math.round(avgCPU * 10) / 10} %</td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Aside;
