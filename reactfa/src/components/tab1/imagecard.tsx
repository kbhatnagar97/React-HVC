import React from 'react';

interface Images{
    productname:"string",
    productdetails:"string",
    radiobutton1:"string",
    radiobutton2:"string",
    button:"string";
};

export const ImageCard = () => {
    const Images=[ 
        {
            productname:"Linux 2 Image",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)"
        },
        {
            productname:"Ubuntu Server 18.04 LTS",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)"
        },
        {
            productname:"Red Hat Enterprise Linux 8",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)"
        },
        {
            productname:"Microsoft Windows Server 2019 Base",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)"
        },
        {
            productname:"SUSE Linux Enterprise Server",
            productdetails:"Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal perfoemances",
            radiobutton1:"64-bit (x86)",
            radiobutton2:"64-bit (ARM)"
        }
    ]


return (
    <div>
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
            <div className="radio-button"><input name="radio" type="radio"/>{image.radiobutton1}</div>
                  <div className="radio-button"><input name="radio" type="radio"/>{image.radiobutton2}</div>
              </div>
              <div className="card-select">
                <button className="select-button">Select</button>
              </div>
            </div>
          </div>
            }
            )
        }
        </div>
);
}
