import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './spinner';
import Errorboundary from './errorBoundary';
import WelcomeScreen from './welcomeScreen';

const Layout = lazy(() => import('./layout'));

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {

    return (
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <Errorboundary fallbackUI={<Spinner/>}>
                    <Suspense fallback={<WelcomeScreen/>}>
                        <Layout/>
                    </Suspense>
                </Errorboundary>
            </BrowserRouter>
        </Suspense>

    )
}
    
