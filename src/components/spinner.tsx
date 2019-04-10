import React, { CSSProperties } from 'react';
import { CircleLoader } from 'react-spinners';
import { centeredContent, fullScreen } from '../css';


export default function() {
    return (
        <div style={{...centeredContent,...fullScreen}}>
            <CircleLoader color="white" size={10} sizeUnit={"em"}/>
            <h2 style={appearance}>Loading...</h2>
        </div>
    )
}

const appearance: CSSProperties = {
    color: "white",
    fontSize: "1.5em"
}