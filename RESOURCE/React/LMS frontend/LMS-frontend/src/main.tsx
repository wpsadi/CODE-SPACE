import './index.css'

import *as ReactDOM from 'react-dom/client'
import {Toaster} from "react-hot-toast"
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom"

import App from './App.tsx'
import store from './Redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
  <BrowserRouter>
  <App />
  <Toaster/>
  </BrowserRouter>
  </Provider>
    
)
