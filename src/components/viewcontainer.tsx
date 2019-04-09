import React, { CSSProperties } from 'react';
import DetailView from './detailview';
import MainView from './mainview';
import { View } from './layout';
import { Route, Router } from 'react-router';



export default function ViewContainer(){

    return (
        <div style={container}>
            <Route exact path="/" component={MainView} />
            <Route path="/forest" render={() => <DetailView view="forest"/>} />
            <Route path="/desert" render={() => <DetailView view="desert"/>} />
            <Route path="/sky" render={() => <DetailView view="sky"/>} />

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