import React, { Suspense } from 'react';
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './spinner';
import Errorboundary from './errorBoundary';
/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {

    return (
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <Errorboundary fallbackUI={<Spinner/>}>
                    <Suspense fallback={<div/>}>
                        <Layout/>
                    </Suspense>
                </Errorboundary>
            </BrowserRouter>
        </Suspense>

    )
}
    
