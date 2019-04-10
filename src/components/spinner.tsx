import React, { CSSProperties } from 'react';
import { PacmanLoader } from 'react-spinners';
import { centeredContent, fullScreen } from '../css';


export default function() {
    return (
        <div style={{...centeredContent,...fullScreen}}>
            <PacmanLoader color="white" size={25} sizeUnit={"px"}/>
            <h2 style={appearance}>Loading...</h2>
        </div>
    )
}

const appearance: CSSProperties = {
    color: "white",
    fontSize: "1.5em"
}