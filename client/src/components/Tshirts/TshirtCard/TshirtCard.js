import React from 'react';
import "./TshirtCard.css";

const TshirtCard = ({tshirt:{image,teamName,teamCountry}}) => {
    return (
      <div className='container'>
        <div className='tshirt'>
          
          <div className='tshirt-img'>
            <img src={image}alt='tshirt design' />
          </div>
          <div className='text-tshirt-cont'>
            <div className='mr-grid'>
              <div className='col1'>
                <h2>{teamName}</h2>
                <ul className='tshirt-gen'>
                  <p>{teamCountry}</p>
                </ul>
              </div>
            </div>
           </div>
           </div>
           </div>
    );
    };
  
  export default TshirtCard;