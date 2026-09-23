import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Globalstate from './context/index.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/mern-app">
    <Globalstate>
      <App />
    </Globalstate>
  </BrowserRouter>
)