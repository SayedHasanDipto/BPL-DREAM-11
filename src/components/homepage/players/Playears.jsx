import React, { use } from 'react';
import Availavless from './availavlePlayers/Availavless';

const Playears = ({ playersPromise }) => {
    // console.log(playersPromise);
    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div>
            <Availavless playersData={playersData}></Availavless>
        </div>
    );
};

export default Playears;