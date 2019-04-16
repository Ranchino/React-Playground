import React, { CSSProperties, Component } from 'react';
import { fullscreenAbsolute } from '../css';
import { RouteComponentProps } from 'react-router-dom';
import HeaderSection from './headerSection';
import TextSection from './textSection';
import { View } from './layout';
import ImageSection from './imageSection';


interface Props extends RouteComponentProps {
    view: View
}

interface State {
    isModalOpen: boolean
}

export default class DetailView extends Component<Props, State> {


    private get view() {
        return this.props.match.url.substr(1);
    }

    private get imageSrc() {
        return `../assets/${this.view}.jpg`;
    }


    render() {
        return (
            <div style={container}>
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute, ...trans }}/>
                <div style={stylingContent}>
                    <div style={margin}>
                        <HeaderSection view={this.view}/>
                        <TextSection view={this.props.view}/>
                        <ImageSection view={this.view}/>
                    </div>
                </div>
            </div>
        );
    }
}


const margin: CSSProperties = {
    margin: '10px',
    flexGrow: 1
}
    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
}

const stylingContent: CSSProperties = {
    position: 'absolute',
    display: 'flex',
    width: '100%', 
    height: '100%',
    overflowY: 'auto'

}

const trans: CSSProperties = {
    opacity: 0.4
}
