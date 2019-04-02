import React, {CSSProperties} from "react";

export default function Header(){
    return <h1 style = {header}>React Playground</h1>
}

const header: CSSProperties = {
    fontSize: "1.7em",
    margin: 0,
    padding: 0,
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
}
