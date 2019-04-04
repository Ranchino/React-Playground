import React, {CSSProperties} from "react";

export default function Header(){
    return <h1 style = {header}>React Playground</h1>
}

const header: CSSProperties = {
    fontFamily: "Verdana, Geneva, sans-serif",
    fontSize: "2em",
    margin: 0,
    padding: "0.5em",
    cursor: "pointer",
    display: "flex",
    alignItems: "center"
}
