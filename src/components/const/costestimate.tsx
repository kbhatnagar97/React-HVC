import React from 'react';
import {Images} from '../../Constants/constants';

export const CostInfo = (props : {image:number} ) => {
  let finalPrics = Images[props.image].cost;

    return (
        <div className="main-cost-info">
          <div className="text">
            Cost estimate
          </div>
          <div className="row2">
            <div className="product">
              {Images[props.image].productname}
            </div>
            <div className="cost-estimate">
              {Images[props.image].cost}
            </div>
          </div>
          <hr></hr> 
          <div className="final-bill">
            {finalPrics}
          </div>
        </div>
    );
}