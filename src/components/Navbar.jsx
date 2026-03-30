import React from 'react';
import dollarImg from "../assets/dollar 1.png"
import logoImg from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='my-5'>
            <div className="navbar">
                <div className="flex-1">
                    <a>
                        <img src={logoImg} alt="logoImg" />
                    </a>
                </div>
                <div className="flex items-center gap-12">
                    <ul className='hidden md:flex gap-12'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Fixture">Fixture</a></li>
                        <li><a href="/Teams">Teams</a></li>
                        <li><a href="/Schedules">Schedules</a></li>
                    </ul>
                    <button className="flex justify-between items-center gap-2 rounded-xl py-4 h-12 btn">
                        <span className='font-semibold text-base'>0 Coins</span>
                        <img src={dollarImg} alt="dollarImg" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;