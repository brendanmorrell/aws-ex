import React from 'react';
import { render } from 'react-dom';

import App from './components/ToggleLocalStorageHOC.jsx';
import './styles.scss';

const root = document.getElementById('root');
render(<App />, root);
