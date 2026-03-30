import React from 'react';
import { FaUserAlt, FaFlag } from "react-icons/fa";

const Card = ({ playersData }) => {
    console.log(playersData);
    return (
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {playersData.map(playeru => {
                    console.log(playeru, 'playeru');
                    return (
                        <div className='p-6 rounded-3xl border border-gray-300'>
                            <div className='w-full overflow-hidden rounded-3xl mb-6'>
                                <img src={playeru.playerImg} alt="" />
                            </div>
                            <div className='space-y-4 pb-4 border-b border-gray-300 mb-4'>
                                <h1 className='text-3xl font-bold flex items-center gap-4'>
                                    <FaUserAlt />
                                    {playeru.playerName}
                                </h1>
                                <div className='flex justify-between items-center text-xl'>
                                    <h3 className='flex items-center gap-4 text-gray-500'>
                                        <FaFlag />
                                        {playeru.playerCountry}
                                    </h3>
                                    <button className='btn text-xl font-normal rounded-2xl'>{playeru.playerType}</button>
                                </div>
                            </div>
                            <div className='text-lg space-y-4'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='font-bold'>Rating</h1>
                                    <h1>Rating ({playeru.rating})</h1>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='space-y-4'>
                                        <h1 className='font-bold'>{playeru.bowlingStyle}</h1>
                                        <h1 className='font-bold'>Price: ${playeru.price}</h1>
                                    </div>
                                    <div className='space-y-4 text-right'>
                                        <h1 className='font-bold'>{playeru.battingStyle}</h1>
                                        <button className='btn text-lg rounded-xl'>Choose Player</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export default Card;