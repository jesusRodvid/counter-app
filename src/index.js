import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css'
import CounterApp from './CounterApp';

const divRoot = createRoot(document.getElementById('root'));

divRoot.render( <CounterApp/>);

