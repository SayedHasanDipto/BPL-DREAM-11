import React from 'react';
import bannerImg from "../../assets/bg-shadow.png"
import heroImg from "../../assets/banner-main.png"
import './Hero.css'

const Hero = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage:
                    `url(${bannerImg})`,
                borderRadius: '30px',
                minHeight: '34rem',
            }}
        >
            <div className="hero-content text-neutral-content text-center">
                <div className="w-full flex flex-col justify-center items-center">
                    <img src={heroImg} alt="heroImg" />
                    <div className='my-6'>
                        <h1 className='font-bold text-5xl mb-4'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className='font-medium text-2xl inter text-gray-400'>Beyond Boundaries Beyond Limits</p>
                    </div>
                    <button className='border border-[#E7FE29] py-6 px-3 rounded-4xl'>
                        <span className='bg-[#E7FE29] text-black font-bold p-3.5 sora rounded-3xl'>
                            Claim Free Credit
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;