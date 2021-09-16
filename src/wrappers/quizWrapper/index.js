import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import questions from '../../utils/questions'
import { motion, AnimatePresence } from 'framer-motion'
import EndScreen from '../../components/endScreen'
import Question from '../../components/question'

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

   const handleStartAgain = () => {
      setShowScore(false)
      setCurrentQuestion(0)
      setScore(0)
      setSeconds(100)
   }

   const key = showScore ? 100000 : currentQuestion

   return (
      <AnimatePresence exitBeforeEnter={true}>
         <motion.div
            animate={{ x: 0, y: 0 }}
            initial={true}
            key={key}
            exit={{ x: 0, y: -250 }}
            className={styles.wrapper}
            transition={{ duration: 0.5 }}
         >
            {showScore ? (
               <EndScreen
                  score={score}
                  questionLength={questions.length}
                  handleStartAgain={handleStartAgain}
               />
            ) : (
               <Question
                  seconds={seconds}
                  currentQuestion={currentQuestion}
                  handleAnswerOptionClick={handleAnswerOptionClick}
               />
            )}
         </motion.div>
      </AnimatePresence>
   )
}

export default QuizWrapper
