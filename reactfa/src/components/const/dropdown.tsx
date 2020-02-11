import React from 'react';

export const Drop = () => {
    return (
        <div className="drop-down">
    <button className="drop-button">Region</button>
    <div className="dropdown-content">
      <a className="sel" href="#">US-East -1</a>
      <a className="sel" href="#">Asia Pacific - Mumbai</a>
      <a className="sel" href="#">US-West-1</a>
    </div>  
  </div>
    );
}