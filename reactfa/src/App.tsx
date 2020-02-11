import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <body>
      <div className="App">
        <h1 className="heading">HVC</h1>
      </div>
      <div className="main-body-content">
        <div className="main-content-info">
          <div className="sub-heading-row">
            <div className="sub-heading">
              Choose Image
            </div>
            <div className="drop-down">
              <button className="drop-button">Region</button>
              <div className="dropdown-content">
                <a className="sel" href="#">US-East-1</a>
                <a className="sel" href="#">Asia Pacific - Mumbai</a>
                <a className="sel" href="#">US-West-1</a>
              </div>
            </div>
          </div>
          <div className="progress-bar">
              <button className="button-1">1. Choose Image</button>
              <button className="button-2">2.Choose Instant Type</button>
              <button className="button-3">3. Choose Storage and Network</button>
              <button className="button-4">4. Configure Security</button>
              <button className="button-5">5. Review & Lunch</button>
          </div>
          <div className="image-card">
            <div className="card-image">

            </div>
            <div className="card-product-name-details">
              <div className="card-product-name">
                Linux 2 Image
              </div>
              <div className="card-product-details">
                Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances
              </div>
            </div>
            <div className="card-radio-select">
              <div className="card-radio">
                  <div className="radio-button"><input name="radio" type="radio"/>64-bit (x86)</div>
                  <div className="radio-button"><input name="radio" type="radio"/>64-bit (ARM)</div>
              </div>
              <div className="card-select">
                <button className="select-button">Select</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-cost-info">
          <div className="text">
            Cost estimate
          </div>
          <div className="row2">
            <div className="product">
              Linux 2 Image
            </div>
            <div className="cost-estimate">
              $0.0
            </div>
          </div>
          <hr></hr> 
          <div className="final-bill">
            $0.0/mo
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
