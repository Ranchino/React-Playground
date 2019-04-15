import React, { CSSProperties, Suspense, Component } from 'react';
import { fullscreenAbsolute, fullScreen, centeredContent } from '../css';
import { View } from './layout';
import Spinner from './spinner';
import Modal from './modal';


interface Props {
    view: View
}

/** React function component */
export default class DetailView extends React.Component<Props, {}> {
    state = {show: false}

    toggleModal = () => {
        this.setState({ show: !this.state.show})
    }
    private imageSrc = `../assets/${this.props.view}.jpg`
    //om man vill testa error-Boundary så släng in throw "hej"

    private get renderModal (){
        if (this.state.show){
            return (
                <Modal>
                    <h1 style={modulText}>Modal</h1>
                </Modal>
            )
        }
    }

    render () {
        return (
            <Suspense fallback={<Spinner/>}>
                <div style={container}>
                    {/* <button onClick={this.toggleModal} style={{...buttonStyle,...centeredAbsolute}}>Open Modal</button> */}
                    <img src={this.imageSrc} style={fullscreen}/>
                    <h1 onClick={this.toggleModal} style={{ ...centeredAbsolute, ...appearance}}>{this.props.view}</h1>
                    {this.renderModal}
                </div>
            </Suspense>

        )
    }
   

}

const modulText: CSSProperties = {
    color: "red"
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

const buttonStyle: CSSProperties = {
    fontSize: '1.5em',
    padding: '0.5em',
    backgroundColor: 'white',
    border: 'none'
}