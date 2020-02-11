import React from 'react';

export const CostInfo = () => {
    return (
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
    );
}