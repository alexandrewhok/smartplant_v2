import React from 'react';

const CardPlant = ({ link, image, name, icon}) => {
    return (
        <a href={link} className="link">
        <div className="card-plant">
            
            <img src={image} className="card-plant-image" alt="Plant_Photo" />
            <div className="card-plant-info">
               <div className="card-plant-info-name text-plant">{name}</div>
               
               <img src={icon} className="card-plant-info-icon" alt="icon" />
            </div>
          
        </div>
        </a>
        
    );
};

export default CardPlant;

