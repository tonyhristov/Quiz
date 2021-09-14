import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import QuizWrapper from './wrappers/quizWrapper'

ReactDOM.render(
   <React.StrictMode>
      <App>
         <QuizWrapper />
      </App>
   </React.StrictMode>,
   document.getElementById('root')
)
