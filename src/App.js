import React, { useState } from 'react'
import AnswersContext from './context'
import './App.css'

function App(props) {
   const [answers, setAnswers] = useState(0)

   const correctAnswers = (answers) => {
      setAnswers({ answers, correctAnswers: answers++ })
   }

   return (
      <AnswersContext.Provider value={{ answers, correctAnswers }}>
         {props.children}
      </AnswersContext.Provider>
   )
}

export default App
