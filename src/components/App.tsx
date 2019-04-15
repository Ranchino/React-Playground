import React, { CSSProperties, Suspense, lazy, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './spinner';
import Errorboundary from './errorBoundary';
import WelcomeEmoji from './welcomeEmoji';
import Modal from './modal';
import { RouteComponentProps } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';


const Layout = lazy(() => import('./layout'));

interface State {
    isModalOpen: boolean
}

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default class App extends React.Component<{}, State> {

    state: State = {
        isModalOpen: true
    }

    private openModal = () => this.setState({ isModalOpen: true });
    private closeModal = () => this.setState({ isModalOpen: false });

    private get WelcomeScreen(){
        return (
            <div style={content}>
            {
                this.state.isModalOpen ? (
                    <Modal persistent shouldClose={this.closeModal}>
                        <div>
                            <h3>Modal opened from <span style={highlighted}>{this.state.isModalOpen}</span> view</h3>
                            <button onClick={this.closeModal}>Close modal</button>
                        </div>
                    </Modal>
                ) :null
            }
            </div>
        )
    }


    render() {
        return (
            <Suspense fallback={<Spinner/>}>
                <BrowserRouter>
                    <Errorboundary fallbackUI={<Spinner/>}>
                        {this.WelcomeScreen}
                        <Suspense fallback={<WelcomeEmoji/>}>
                            <Layout/>
                        </Suspense>
                    </Errorboundary>
                </BrowserRouter>
            </Suspense>
        )
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