import React, {CSSProperties} from "react";

interface Props {
    type: "forest" | "desert" | "sky"
}

export default function SectionItem(props: Props){
    const image = `../assets/${props.type}.jpg`;
    return <img src={image} style = {imageStyle}></img>
}

const imageStyle: CSSProperties = {
width: "100%"
}