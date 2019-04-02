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

/* import React, {CSSProperties} from "react";

export default function Layout() {
    return (
        <div style={header}>
            <h1>React Playground!</h1>
        </div>
    )
}


const header: CSSProperties = {
    height: "4em",
    background: "black",
    color: "#E1E1E1",
    display: "flex",
    alignItems: "stretch",
    padding: "0 1em"
}; */