import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';

const Dashboard = (props) => {
  const { data } = props;
    
  
  return (
    <div className="dashboard-container">
        <PanelGroup
          accordion
          id="accordion-controlled-example"
          onSelect={props.displayStep}
        >
        <div className="test-steps">
          {data.test_steps.map((testCase, i) => (
            <Panel eventKey={i} key={i}>
            <span className="test-case-name">{testCase.step_name}</span>
              <div className="test-case">
                <Panel.Title toggle><img src={testCase.screenshot} height="247" width="139"></img></Panel.Title>
              </div>
            </Panel>
          ))}
        </div>
        </PanelGroup>
    </div>
  )
}

export default Dashboard;
