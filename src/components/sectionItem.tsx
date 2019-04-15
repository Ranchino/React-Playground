import React, { CSSProperties } from 'react';
import { centeredContent, fullscreenAbsolute } from '../css';
import { View } from './layout';
import { Link } from 'react-router-dom';

interface Props {
    view: String
}
/** React function component */
export default function SectionItem(props: Props) {

    const url = `${props.view}`;
    const imageSrc = `../assets/${props.view}.jpg`;

    return (
        <Link to={url} style={{ ...linkAppearance, ...centeredContent }}>
            <img src={imageSrc} style={fullscreenAbsolute} />
            <h1 style={{ ...centeredAbsolute, ...appearance}}>{props.view}</h1>
        </Link>
    );
}

const linkAppearance: CSSProperties = {
    height: '100%',
    cursor: 'pointer'
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%'
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