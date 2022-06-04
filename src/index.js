import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/open-sans/latin-300.css';
import '@fontsource/open-sans/latin-300-italic.css';
import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-400-italic.css';
import '@fontsource/open-sans/latin-600.css';
import '@fontsource/open-sans/latin-600-italic.css';
import '@fontsource/open-sans/latin-700.css';
import '@fontsource/open-sans/latin-700-italic.css';
import '@fontsource/fjalla-one';
import './styles/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
