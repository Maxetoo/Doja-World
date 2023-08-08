import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './Store/reduxStore'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import './Styling/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
