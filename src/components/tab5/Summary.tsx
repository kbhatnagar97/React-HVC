import React from 'react';
import {Images} from './../../Constants/constants';

export const Summ = (props : {image:number} ) => {
    return (
        <div className="data1">
            <div className="image-card"  >
            <div className="card-image"></div>
            <div className="card-product-name-details">
              <div className="card-product-name">   
              {Images[props.image].productname}
              </div>
              <div className="card-product-details">
              {Images[props.image].productdetails}
              </div>
            </div>
            <div className="card-radio-select">
              <div className="card-radio">
            <div className="radio-button"><input name="radio" type="radio" checked/>{Images[props.image].radiobutton1}</div>
                  {/* <div className="radio-button"><input name="radio" type="radio"/>{Images[props.image].radiobutton2}</div> */}
              </div>
              <div className="card-select">
              </div>
            </div>
          </div>
        </div>
        );
}