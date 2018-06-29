import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: "1"
    }
  }

  handleSelect(activeKey) {
    if (activeKey !== null) {
      this.setState({ activeKey });
      this.props.displayStep(activeKey); 
    }
  }
  
  render() {
    const { data } = this.props;

    return (
      <div className="dashboard-container">
          <PanelGroup
            accordion
            id="accordion-controlled-example"
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
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
}

export default Dashboard;
