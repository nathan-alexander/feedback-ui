import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { FeedbackContextProvider } from './feedbackContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FeedbackContextProvider>
        <Router>
            <App />
        </Router>
    </FeedbackContextProvider>
)
