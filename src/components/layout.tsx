import React, {CSSProperties} from "react";
import Header from "./navbar";
import Content from "./content";

export default function Layout(){
    return (
        <div style = {{...flex}}>
            <Header/>
            <Content/>
        </div>
    );
}

const flex: CSSProperties = {
    display: "flex",
    height: "100%",
    background: "black",
    flexDirection: "column",
    color: "#E1E1E1"
}