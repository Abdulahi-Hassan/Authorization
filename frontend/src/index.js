import { createRoot } from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export let token=localStorage.getItem('token')
export let endpoint='http://localhost:3000/api/'
const container = document.querySelector('#root')
const root = createRoot(container)
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)