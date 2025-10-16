import React from "react";

interface PropertyTypeAdmonitionProps {
    title: string;
    children: React.ReactNode;
}

export default function PropertyTypeAdmonition(props: PropertyTypeAdmonitionProps) {
    return (
        <div style={{ border: 'solid red', padding: 10 }}>
            <h5 style={{ color: 'blue', fontSize: 30 }}>{props.title}</h5>
            <div>{props.children}</div>
        </div>
    );
}