import React from 'react';

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
  selecteFromImage:"object",
  setselectedFromImage:"object",
}

export const ImageCard = () => {
  const selectedImage = (cardnumber:number) => Images[cardnumber];
    const Images=[ 
        {
            productname:"Linux 2 Image",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)",
            cost:"$243.61/month",
            key:1,
        },
        {
            productname:"Ubuntu Server 18.04 LTS",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)",
            cost:"$243.61/month",
            key:2,
        },
        {
            productname:"Red Hat Enterprise Linux 8",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)",
            cost:"$300/month",
            key:3,
        },
        {
            productname:"Microsoft Windows Server 2019 Base",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)",
            cost:"$338.77/month",
            key:4,

        },
        {
            productname:"SUSE Linux Enterprise Server",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)",
            cost: "$200.22/month",
            key:5,
        }
    ]


return (
    <div className="data1">
        {
            Images.map((image) => {
                return <div className="image-card">
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
                <button onClick={() => selectedImage(image.key)} className="select-button">Select</button>
              </div>
            </div>
          </div>
            }
            )
        }
        </div>
);
}
