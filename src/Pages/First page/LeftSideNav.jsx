// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [catagories,setCatagories]= useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])
    return (
        <div className="">
            <h1>All Catagories</h1>
            {
                catagories.map(catagorie =><Link
               className="block m-7" 
               key ={catagorie.id}
               to={`/catagorie/${catagorie.id}`}>
                {catagorie.name}
                
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;