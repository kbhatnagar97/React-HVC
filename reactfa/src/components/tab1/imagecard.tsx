import React from 'react';
import {Images} from '../../Constants/constants';

interface Images{
    productname:"string",
    productdetails:"string",
    radiobutton1:"string",
    radiobutton2:"string",
    button:"string",
    cost: "string",
    key:"number",
};

interface imagecardprops {
  selecteFromImage:"object";
  setselectedFromImage:"object";
}

interface imageProp 
{
  onClick : (i:number)=>void;
}

export const ImageCard = (props:imageProp) => {
  const selectedImage = (cardnumber:number) => Images[cardnumber];
  


return (
    <div className="data1">
        {
            Images.map((image,i:number) => {
                return <div className="image-card"  >
            <div className="card-image"></div>
            <div className="card-product-name-details">
              <div className="card-product-name">   
                {image.productname}
              </div>
              <div className="card-product-details">
                {image.productdetails}
              </div>
            </div>
            <div className="card-radio-select">
              <div className="card-radio">
            <div className="radio-button"><input name="radio" type="radio" checked/>{image.radiobutton1}</div>
                  <div className="radio-button"><input name="radio" type="radio"/>{image.radiobutton2}</div>
              </div>
              <div className="card-select">
                <button className="select-button" onClick={() => props.onClick(i)} >Select</button>
              </div>
            </div>
          </div>
            }
            )
        }
        </div>
);
}
