import React from 'react';
  
const Dashboard = (props) => {
  const { data } = props;

  return (
    <div className="dashboard-container">
      {data.test_steps.map((image, i) => (
        <div key={i}>
          <img src={image.screenshot} id={i} onClick={props.currentStep}className="screenshot" height="247" width="139" key={i}></img>
          <p className="step-name"><strong>{image.step_name}</strong></p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard;
