import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import CodeHighlighter from '../../components/codeHighlighter'
import questions from '../../utils/questions'
import Progress from '../../components/progressBar'
import { motion } from 'framer-motion'

const QuizWrapper = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0)
   const [showScore, setShowScore] = useState(false)
   const [score, setScore] = useState(0)
   const [seconds, setSeconds] = useState(100)

   const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
         setScore(score + 1)
      }

      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
         setCurrentQuestion(nextQuestion)
         setSeconds(100)
      } else {
         setShowScore(true)
      }
   }

   useEffect(() => {
      let myInterval = setInterval(() => {
         if (seconds > 0) {
            setSeconds(seconds - 1)
         }
         if (seconds === 0) {
         }
      }, 1000)
      if (seconds <= 0) {
         const nextQuestion = currentQuestion + 1
         if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
         } else {
            setShowScore(true)
         }
         setSeconds(100)
      }
      return () => {
         clearInterval(myInterval)
      }
   })

   return (
      <div className={styles.wrapper}>
         {showScore ? (
            <div className={styles.final}>
               You scored {score} out of {questions.length}
               <button
                  className={styles.button}
                  onClick={() => {
                     setShowScore(false)
                     setCurrentQuestion(0)
                     setScore(0)
                     setSeconds(100)
                  }}
               >
                  <div className={styles['blue-part-final']}>
                     <h1 className={styles['blue-part-text']}>Start Again</h1>
                  </div>
               </button>
            </div>
         ) : (
            <>
               <div>
                  <Progress done={seconds} />
               </div>
               <h1 className={styles.name}>
                  {questions[currentQuestion].name}
               </h1>
               <CodeHighlighter type='description'>
                  {questions[currentQuestion].description}
               </CodeHighlighter>
               <div className={styles['button-wrapper']}>
                  {questions[currentQuestion].answers.map((key) => {
                     const value = key.value
                     return (
                        <button
                           className={styles.button}
                           onClick={() => {
                              handleAnswerOptionClick(key.isCorrect)
                           }}
                           value={value}
                        >
                           <div className={styles['blue-part']}>
                              <h1 className={styles['blue-part-text']}>
                                 {value}
                              </h1>
                           </div>
                           <div className={styles['description-part']}>
                              <CodeHighlighter type='answer'>
                                 {key.answerName}
                              </CodeHighlighter>
                           </div>
                        </button>
                     )
                  })}
               </div>
            </>
         )}
      </div>
   )
}

export default QuizWrapper
