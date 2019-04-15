import React, { CSSProperties, lazy } from 'react';
import { centeredContent } from '../css';


interface Props {

}

/* const appRoot = document.getElementById('app-container');
 */
export default class WelcomeScreen extends React.Component<Props, {}>{
    render (){
        return (
            <div style={{ ...backgroundDimmed,...centeredContent}}>
                <h1 style={textColor}>✨Welcome🤩</h1>
            </div>
        )
    }
}

const backgroundDimmed: CSSProperties = {
    border: '1px solid red',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
}

const textColor: CSSProperties = {
    color: 'white'
}