/*import React from 'react';
import ReactDOM from 'react-dom' ;

import App from './App';
import './App.css';



ReactDOM.render(<App/>,document.getElementById('root'));

*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
