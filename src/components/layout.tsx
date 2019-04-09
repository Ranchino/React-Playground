import React, { CSSProperties } from 'react';
import Navbar from './navbar';
import ViewContainer from './viewcontainer';
import { fullScreen } from '../css';

export type View =  "main" | "forest" | "desert" | "sky"


interface State {
    view: View
}

/** React function component */
export default class Layout extends React.Component<{}, State> {

    state: State = {
        view: "main"
    }

    handleOnHeaderTextClick = () => {
        this.setState({ view: "main" })
    }

    handleOnSectionItemOnclick = (view: View) => {
        this.setState({ view });
    }
    
    render(){
        //console.log(this.state.view)
        return (
            <div style={{ ...columnFlex, ...fullScreen, ...background }}>
                <Navbar onHeadTextClick={this.handleOnHeaderTextClick}/>
                <ViewContainer view={this.state.view} onSectionItemClick={this.handleOnSectionItemOnclick} />
            </div>
        );

    }
}

const columnFlex: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const background: CSSProperties = {
    background: '#1f1f1f'
}