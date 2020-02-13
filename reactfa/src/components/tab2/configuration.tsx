import React from 'react'

export const Config =() => {
    return (
        <div>
        <div className="sub-tabs">
           <button className="bb1"><b>General Purpose</b></button>
           <button className="bb2"><b>CPU Optimized</b></button>
           <button className="bb3"><b>Storage Optimised</b></button> 
           <button className="bb4"><b>Network Optimised</b></button>
          </div>
          <div className="sub-sub-heading">
            Create Configuration
          </div>
          <div className="drops2">
            <div className="drop-down">
              <button className="drop-button">CPU Cores</button>
            <div className="dropdown-content">
                <a className="sel" href="#">1 Core</a>
                <a className="sel" href="#">2 Core</a>
                <a className="sel" href="#">4 Core</a>
                <a className="sel" href="#">6 Core</a>
                <a className="sel" href="#">8 Core</a>
              </div>  
            </div>
            <div className="drop-down">
              <button className="drop-button">Memory</button>
            <div className="dropdown-content">
                <a className="sel" href="#">256MB</a>
                <a className="sel" href="#">512MB</a>
                <a className="sel" href="#">1GB</a>
                <a className="sel" href="#">4GB</a>
                <a className="sel" href="#">8GB</a>
              </div>  
            </div>
          </div>
          </div>
    );
}