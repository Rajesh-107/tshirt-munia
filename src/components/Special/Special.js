import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>This is for special</h2>
            <p>Gift : {ring} </p>
        </div>
    );
};

export default Special;