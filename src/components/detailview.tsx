import React, { CSSProperties, Suspense } from 'react';
import { View } from './layout';
import Spinner from './spinner';


interface Props {
    view: View
}

/** React function component */
export default function DetailView(props:Props) {
    const imageSrc = `../assets/${props.view}.jpg`
    //om man vill testa error-Boundary så släng in throw "hej"

    return (
        <Suspense fallback={<Spinner/>}>
            <div style={container}>
                <img src={imageSrc} style={fullscreen}/>
                <h1 style={{ ...centeredAbsolute, ...appearance}}>{props.view}</h1>
            </div>
        </Suspense>
    );
}

//Ändra till rätt storlek på bilderna i mobilläge
const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyContent: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%'
}

const fullscreen: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}

const appearance: CSSProperties = {
    color: '#1E1E1E',
    textShadow: '0 0 3px white'
}