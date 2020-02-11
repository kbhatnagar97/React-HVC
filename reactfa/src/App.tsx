import React from 'react';
import './App.css';
import {Image} from "./components/tab1/image"
import {Navbar} from "./components/const/navbar"
import {CostInfo} from "./components/const/costestimate"
import {Drop} from "./components/const/dropdown"

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
            <Drop />
          </div>
          <Navbar />
          <Image />
        </div>
        <CostInfo />
      </div>
    </body>
  );
}

export default App;
