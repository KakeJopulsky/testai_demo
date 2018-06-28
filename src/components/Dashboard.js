import React from 'react';
import { Panel, PanelGroup } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: '1'
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
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
              <Panel eventKey={i}>
                <div className="test-case">
                  <Panel.Title toggle><img src={testCase.screenshot} height="247" width="139"></img></Panel.Title>
                  <Panel.Body collapsible>{testCase.step_name}</Panel.Body>
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
