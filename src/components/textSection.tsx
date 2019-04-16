import React, { Component, CSSProperties } from 'react';
import { View } from './layout';

interface Props {
    view: View
}


export default class TextSection extends Component<Props>{
    render() {
        return (
            <div style={shadowText}>
                <p>
                    <b>Ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint officia ad voluptate, similique ullam ea neque aliquam ratione beatae soluta, magnam illum quia fugit corrupti maiores. Animi velit illum ut.</b>
                    <br/><br/>
                    Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure, magni unde dignissimos atque, impedit nisi eos quis corrupti omnis eveniet? Corrupti ad quod quasi magnam libero sit ratione vel.
                    <br/><br/>
                    Ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure, magni unde dignissimos atque, impedit nisi eos quis corrupti omnis eveniet? Corrupti ad quod quasi magnam libero sit ratione vel.
                </p>
            </div>
        )
    }
}

const shadowText: CSSProperties = {
    textShadow: '2px 2px 8px black',
    color: 'white'
}