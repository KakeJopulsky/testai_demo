import React from 'react';
import {  } from 'react-bootstrap';


  
const Dashboard = (props) => {
  const { data } = props;

  return (
    <div className="dashboard-container">
      {data.test_steps.map((image, i) => (
        <div key={i}>
          <img src={image.screenshot} id={i} onClick={props.currentStep}className="screenshot" height="247" width="139" key={i}></img>
          <p className="step-name">{image.step_name}</p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard;
