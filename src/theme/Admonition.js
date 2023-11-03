import React from 'react';
import Admonition from '@theme-original/Admonition';

export default function AdmonitionWrapper(props) {
    console.log('AdmonitionWrapper', props);
    return <Admonition {...props} />;
}