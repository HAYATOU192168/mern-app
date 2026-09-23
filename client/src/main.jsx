
<<<<<<< HEAD
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Globalstate from './context/index.jsx';
import {BrowserRouter} from "react-router-dom"
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/mern-app">
    <Globalstate>
      <App />
    </Globalstate>
=======
 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './context/index.jsx'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
  </BrowserRouter>,
);
