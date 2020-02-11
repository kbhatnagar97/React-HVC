import React from 'react';

export const ImageCard = () => {
return (
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
);
}
