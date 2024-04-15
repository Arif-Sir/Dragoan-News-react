// import React from 'react';
import { useLoaderData } from "react-router-dom"
import LeftSideNav from "../Pages/First page/LeftSideNav";
import RightSideNav from "../Pages/First page/RightSideNav";
import Header from "../Pages/Shared pages/Header";
import Navbaer from "../Pages/Shared pages/Navbaer";
import NewsCard from "../Pages/First page/NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <Navbaer></Navbaer>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 border">
                    <h1>News section</h1>
                    {
                        news.map(anews => <NewsCard
                            key={anews.id}
                            news={anews}>
                        </NewsCard>)
                    }
                    </div>
                <div className=" border"><RightSideNav></RightSideNav></div>
            </div>


        </div>
    );
};

export default Home;