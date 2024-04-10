// import React from 'react';

import { Link } from "react-router-dom";
import Navbaer from "./Shared pages/Navbaer";

const Login = () => {
    const handleLogin= e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);
    }

    return (
        <div>
            <Navbaer></Navbaer>

                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin } className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-3 text-center">Dont’t Have An Account ? <Link className="text-red-500" to='/resister'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Login;