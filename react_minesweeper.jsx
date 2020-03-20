import React from 'react';
import ReactDom from 'react-dom';
import Game from './components/game';

document.addEventListener("DOMContentLoaded", () => {
    // debugger;
    const root = document.getElementById('root');
    ReactDom.render(<Game />, root)
    // ReactDom.render(<Game />, root)
});