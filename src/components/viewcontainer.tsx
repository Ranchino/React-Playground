import React, { CSSProperties, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import Spinner from './spinner';

const DetailView = lazy(() => import('./detailview'));
const MainView = lazy(() => import('./mainview'));


export default function ViewContainer(){
    const detailViews = ['forest', 'sky', 'desert'];


    return (
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <div style={container}>
                        <Route exact path="/" render={() =>
                            <MainView detailViews={detailViews}/>

                        }/>

                        <Route path="/forest" component={DetailView} />
                        <Route path="/desert" component={DetailView} />
                        <Route path="/sky" component={DetailView} />
                    </div>
                </Switch>
            </Suspense>
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