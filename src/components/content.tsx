import React, {CSSProperties} from "react";
import SectionItem from "./sectionItem";

export default function content(){
    return <div style = {style}>
        <SectionItem type="desert"/>
        <SectionItem type="forest"/>
        <SectionItem type="sky"/>
    </div>
}

const style: CSSProperties = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    background: "grey"
}