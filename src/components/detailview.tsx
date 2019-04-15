import React, { CSSProperties, Suspense, Component } from 'react';
import { fullscreenAbsolute, fullScreen, centeredContent } from '../css';
import { View } from './layout';
import Spinner from './spinner';
import Modal from './modal';
import { RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps {
    id: string
}

interface State {
    isModalOpen: boolean
}

export default class DetailView extends Component<Props, State> {

    state: State = {
        isModalOpen: false
    }

    private get view() {
        return this.props.match.url.substr(1);
    }

    private get imageSrc() {
        return `../assets/${this.view}.jpg`;
    }

    private openModal = () => this.setState({ isModalOpen: true });
    private closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div style={container}>
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute }}/>
                <div style={{ ...content, ...fullscreenAbsolute }}>
                    
                    <div style={{ ...fullScreen, ...centeredContent }}>
                        <button onClick={this.openModal}>{this.view}</button>
                    </div>

                </div>
                {
                    this.state.isModalOpen ? (
                        <Modal persistent shouldClose={this.closeModal}>
                            <h3>Modal opened from <span style={highlighted}>{this.view}</span> view</h3>
                            <button onClick={this.closeModal}>Close modal</button>
                        </Modal>
                    ) : null
                }
            </div>
        );
    }
}

const highlighted: CSSProperties = {
    color: 'orange'
}

const content: CSSProperties = {
    zIndex: 10
}
    
const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}