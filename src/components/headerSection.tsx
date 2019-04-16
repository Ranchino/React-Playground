import React, { CSSProperties, Component } from 'react';
import Modal from './modal';

interface Props {
    view: string
}

interface State {
    isModalOpen: boolean
}

export default class HeaderSection extends Component<Props, State> {

    state: State = {
        isModalOpen: false
    }

    private openModal = () => this.setState({ isModalOpen: true });
    private closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div style={container}>
                <h1 style={shadowText}>{this.props.view}</h1>
                <button style={buttonStyle} onClick={this.openModal}>{this.props.view}</button>
                {
                    this.state.isModalOpen ? (
                        <Modal persistent shouldClose={this.closeModal}>
                            <h3>Modal opened from <span style={highlighted}>{this.props.view}</span> view</h3>
                            <button onClick={this.closeModal}>Close modal</button>
                        </Modal>
                    ) : null
                }
            </div>
        );
    }


}
const buttonStyle: CSSProperties = {
    height: '25px',
    marginTop: '2.5em',
    
    
}

const highlighted: CSSProperties = {
    color: 'orange'
}
    
const container: CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
}

const shadowText: CSSProperties = {
    textShadow: '2px 2px 8px black',
    color: 'white'
}
