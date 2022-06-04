import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/open-sans/latin-300';
import '@fontsource/open-sans/latin-300-italic';
import '@fontsource/open-sans/latin-400';
import '@fontsource/open-sans/latin-400-italic';
import '@fontsource/open-sans/latin-600';
import '@fontsource/open-sans/latin-600-italic';
import '@fontsource/open-sans/latin-700';
import '@fontsource/open-sans/latin-700-italic';
import '@fontsource/fjalla-one';
import './styles/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
