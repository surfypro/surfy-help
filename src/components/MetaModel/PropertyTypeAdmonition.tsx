import React from "react";

export default function PropertyTypeAdmonition(props) {
    return (
        <div style={{ border: 'solid red', padding: 10 }}>
            <h5 style={{ color: 'blue', fontSize: 30 }}>{props.title}</h5>
            <div>{props.children}</div>
        </div>
    );
}