import React, { CSSProperties } from 'react';
import { PacmanLoader } from 'react-spinners';
import { centeredContent, fullScreen } from '../css';


export default function() {
    return (
        <div style={{...centeredContent,...fullScreen}}>
            <PacmanLoader color="white"/>
        </div>
    )
}

const appearance: CSSProperties = {
    color: "white",
    fontSize: "1.5em"
}