/* import * as React from "react";*/
import React, {CSSProperties} from "react";

// Alternativ för att importera från CSS fil
/* import {centerdContent} from '../components/css'
 */
interface Props{
    compiler: String;
    framework: String;
}


export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 style={centerdContent} > 
        Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}


export const centerdContent: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 0
};