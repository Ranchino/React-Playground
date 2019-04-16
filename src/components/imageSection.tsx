import React, { CSSProperties, Component } from 'react';
import { View } from './layout';

interface Props {
    view: String
}

export default class ImageSection extends Component<Props>{
    private get imageSelect(){
        return `../assets/${this.props.view}.jpg`;
    }

    render() {
        return (
            <div style={imageContainer}>
                <div style={imageBox}> 
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame}/>
                    <img src={this.imageSelect} style={imageFrame}/>
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    <img src={this.imageSelect} style={imageFrame} />
                    
                </div>
            </div>

        )

    }

}
const imageContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gridTemplateColumns: '50% 50%',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'
    
}

const imageBox: CSSProperties = {
    position: 'relative',
    textAlign: 'center'

}

const imageFrame: CSSProperties = {
    width: '15%',
    height: '20%',
    margin: '1em',
    objectFit: 'cover',
    boxShadow: '5px 10px 5px'

}
