/* eslint-disable react/prop-types */
// import React from 'react';

import { useParams } from "react-router-dom";
import RightSideNav from "./First page/RightSideNav";
import Header from "./Shared pages/Header";
import Navbaer from "./Shared pages/Navbaer";


const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbaer></Navbaer>
            
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>
                    </div>
                <div><RightSideNav></RightSideNav></div>
            
        </div>
        </div>
    );
};

export default NewsDetails;