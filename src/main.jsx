import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavLink,BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Context from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
    <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Context>
)
