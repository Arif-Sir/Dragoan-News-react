// import React from 'react';

import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import q1 from '../../assets/qZone1.png'
import q2 from '../../assets/qZone2.png'
import q3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div>
            <h1>Login With</h1>
            <button className="btn w-full mt-3 text-blue-500">
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className="btn w-full p-4 mt-4">
                <FaGithub></FaGithub>
                Login with GitHub
            </button>
            </div>

            <div className='font-semibold text-2xl mt-6'>
            <h1>Find Us</h1>
           <div className='grid'>
           <button className="btn mt-3">
                <FaFacebook className='text-blue-400'></FaFacebook>
                Facbook
            </button>
            <button className="btn  p-4 mt-4 ">
                <FaTwitter className='text-blue-600'></FaTwitter>
                Twiter
            </button>
            <button className="btn  p-4 mt-4 border rounded-t-lg">
                <FaInstagram className='text-red-800'></FaInstagram>
                Twiter
            </button>
           </div>
            </div>

            {/* q-zone */}
            <div className='space-y-12 bg-gray-200'>
                <h2 className='text-3xl mt-5'>Q Zone</h2>
                <img src={q1} alt="" />
                <img src={q2} alt="" />
                <img src={q3} alt="" />

            </div>


        </div>
    );
};

export default RightSideNav;