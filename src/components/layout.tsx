import React, { CSSProperties } from 'react';
import Navbar from './navbar';
import ViewContainer from './viewcontainer';
import { fullScreen } from '../css';

export type View =  "main" | "forest" | "desert" | "sky"


/** React function component */
export default function Layout() {

    return (
        <div style={{ ...columnFlex, ...fullScreen, ...background }}>
            <Navbar/>
            <ViewContainer />
        </div>
    );

}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}