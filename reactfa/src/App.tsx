import React from 'react';
import './App.css';
import {ImageCard} from "./components/tab1/imagecard"
import {CostInfo} from "./components/const/costestimate"
import {Drop} from "./components/const/dropdown"
import {Config} from "./components/tab2/configuration"
// import {Summary} from "./components/tab5/summary"

const App = () => {  

  const onChangeImage = (i:number) => {
    setSelectedImage(i);
  }

  const [heading,setHeading]=React.useState("Choose Image");
  const [main,setMain]=React.useState(<ImageCard onClick={onChangeImage}/>);
  const [id,setid]=React.useState();
  const [selectedImage,setSelectedImage] = React.useState(0);

  
  const headingcall = (check:number) => {
    console.log(1);
    if(check===1)
    {
      setHeading("Choose Image");
      setMain(<ImageCard onClick={onChangeImage}/>);
    }
    else if(check===2)
    {
      setHeading("Choose Instance Type");
      setMain(<Config />);
    }
    else if(check===3)
    {
      setHeading("Choose Storage and Network");
    }
    else if(check===4)
    {
      setHeading("Configure Security");
    }
    else if(check===5)
    {
      setHeading("Review & Lunch");
      // setMain(<Summary />);

    }
  }
  return (
    <body>
      <div className="App">
        <h1 className="heading">HVC</h1>
      </div>
      <div className="main-body-content">
        <div className="main-content-info">
          <div className="sub-heading-row">
            <div className="sub-heading">
              {heading}
            </div>
            <Drop />
          </div>
          <div className="progress-bar">
              <button onClick={() => headingcall(1)} className="button-1">1. Choose Image</button>
              <button onClick={() => headingcall(2)} className="button-2">2. Choose Instance Type</button>
              <button onClick={() => headingcall(3)} className="button-3">3. Choose Storage and Network</button>
              <button onClick={() => headingcall(4)} className="button-4">4. Configure Security</button>
              <button onClick={() => headingcall(5)} className="button-5">5. Review & Lunch</button>
          </div>
         
          {main}

        </div>
        <CostInfo image={selectedImage} />
      </div>
    </body>
  );
}

export default App;
