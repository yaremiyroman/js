// import './styles.scss';

// import parrots from './image/parrot.jpeg';

// let img: HTMLImageElement = document.createElement('img');
// img.src = parrots;
// document.body.appendChild(img);


// console.log('I am Entry 3Point 123 >>> ');



import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
createRoot(container!).render(<App />);
