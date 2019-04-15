import React, { Component, CSSProperties } from 'react';
import { centeredContent, fullscreenAbsolute } from '../css';
import ErrorBoundary from './errorBoundary';
import Spinner from './spinner';

/** React class component */
export default class ViewSection extends Component {

    render() {
        return (
            <div style={{ ...gridItem, ...centeredContent }}>
                <div style={ fullscreenAbsolute }>
                    <ErrorBoundary fallbackUI={<Spinner/>}>
                        {this.props.children}
                    </ErrorBoundary>
                </div>
            </div>
        );
    }
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5em',
    background: '#808080',
    height: '100%',
    borderRadius: '10px',
    overflow: 'hidden',
}