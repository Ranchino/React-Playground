import React, { CSSProperties } from 'react';
import DetailView from './detailview';
import MainView from './mainview';
import { View } from './layout';

interface Props {
    onSectionItemClick: (view: View) => void
    view: View
}

export default function ViewContainer(props: Props){
    if(props.view==="main") {
        return (
            <div style={container}>
                <MainView onSectionItemClick={props.onSectionItemClick}/>
            </div>
        )
    }
    return (
        <div>
            <DetailView view={props.view}/>
        </div>
    )
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '0.5em',
    justifyItems: 'stretch',
    alignItems: 'stretch',
    gridTemplateColumns: '50% 50%',
}