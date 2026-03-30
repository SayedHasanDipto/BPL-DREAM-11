import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import Card from '../../../ui/Card';


const Availavless = ({ playersData }) => {
    console.log(playersData);
    return (
        <Card playersData={playersData}></Card>
    );
};

export default Availavless;