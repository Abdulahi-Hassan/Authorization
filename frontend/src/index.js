import { createRoot } from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export let token=localStorage.getItem('token')
export let endpoint='https://authorization-1.onrender.com/api/'
const container = document.querySelector('#root')
const root = createRoot(container)
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)