/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title,image_url,details,_id} =news;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-6">
            <h2 className="card-title">{title}</h2>
  <figure><img src={image_url}  /></figure>
  <div className="card-body">

    {
        details.length > 200? <p>{details.slice(0,200)} <Link 
        to={`/news/${_id}`} 
        className="text-red-600 font-bold">... Read Me.</Link></p> 
        : <p>{details}</p>
    }
    
    
    
  </div>
</div>
        </div>
    );
};

export default NewsCard;