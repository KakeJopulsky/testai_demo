import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import testData from '../test_ai_webpage/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(testData);
    this.state = {
      id: '',
      appName: '',
      test_date: '',
      total_tests: '',
      current_test: '',
      test_names: '',
      total_pass: '',
    }
    this.handleCurrentTest = this.handleCurrentTest.bind(this);
    this.handleCurrentStep = this.handleCurrentStep.bind(this);
  }

  componentDidMount() {
    let testNames = [];
    testData.test_cases.forEach(test => testNames.push(test.test_name));

    this.setState({
      id: testData.test_run_id,
      appName: testData.app_name,
      test_date: testData.time_stamp,
      total_tests: testData.test_cases.length,
      current_test: testData.test_cases[0],
      test_names: testNames,
      total_pass: testData.test_cases.filter(test => test.status === true).length,
    })
  }

  handleCurrentTest(e) {
    let newCurrTest = testData.test_cases[e.target.value];
    this.setState({
      current_test: newCurrTest
    });
  }

  handleCurrentStep(e) {
    console.log('handleCurrentStep!');
    console.log(e);
  }

  render() {
    const isReady = this.state.total_tests > 0; // Wait till data is loaded!

    return (
      <div>
        {isReady
          ? (<Header id={this.state.id} appName={this.state.appName} date={this.state.test_date} changeCurr={this.handleCurrentTest}
            testNames={this.state.test_names} totalTests={this.state.total_tests} totalPass={this.state.total_pass}
            /> 
            )
          : (<div>No data</div>)
        }
        {isReady ? (<Dashboard data={this.state.current_test}/>) : <div>No data</div>}
      </div>
    )
  }
}

export default App;