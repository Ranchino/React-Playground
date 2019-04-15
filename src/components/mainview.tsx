import React, { CSSProperties } from 'react';
import SectionItem from './sectionItem';
import { View } from './layout';
import ViewSection from './viewSection';

interface Props {
    detailViews: string[]
}

/** React function component */
export default function MainView(props: Props) {


    return (
        <div style={container}>
            {props.detailViews.map((value) => (
                <ViewSection key={value}>
                    <SectionItem view={value} />
                </ViewSection>
            ))}
        </div>
    );
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