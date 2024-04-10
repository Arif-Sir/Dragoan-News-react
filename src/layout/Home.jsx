// import React from 'react';

import LeftSideNav from "../Pages/First page/LeftSideNav";
import RightSideNav from "../Pages/First page/RightSideNav";
import Header from "../Pages/Shared pages/Header";
import Navbaer from "../Pages/Shared pages/Navbaer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbaer></Navbaer>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 border">
                    <h1>News section</h1>
                    </div>
                <div className=" border"><RightSideNav></RightSideNav></div>
            </div>


        </div>
    );
};

export default Home;