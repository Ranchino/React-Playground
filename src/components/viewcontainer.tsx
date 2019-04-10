import React, { CSSProperties, Suspense, lazy } from 'react';
import { Route } from 'react-router';
import Spinner from './spinner';
import Errorboundary from './errorBoundary';

const DetailView = React.lazy(() => import('./detailview'));
const MainView = React.lazy(() => import('./mainview'));


export default function ViewContainer(){

    return (
        <Errorboundary fallbackUI={<Spinner/>}>
            <Suspense fallback={<Spinner/>}>
                <div style={container}>
                    <Route exact path="/" component={MainView} />
                    <Route path="/forest" render={() => <DetailView view="forest"/>} />
                    <Route path="/desert" render={() => <DetailView view="desert"/>} />
                    <Route path="/sky" render={() => <DetailView view="sky"/>} />
                </div>
            </Suspense>
        </Errorboundary>
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