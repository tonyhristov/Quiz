import React, { useState } from 'react'
import styles from './index.module.css'
import Timer from '../../components/timer'
import CodeHighlighter from '../../components/codeHighlighter'
import questions from '../../utils/questions'

const QuizWrapper = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0)
   const [showScore, setShowScore] = useState(false)
   const [score, setScore] = useState(0)

   const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
         setScore(score + 1)
      }

      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
         setCurrentQuestion(nextQuestion)
      } else {
         setShowScore(true)
      }
   }

   return (
      <div className={styles.wrapper}>
         {showScore ? (
            <div className='score-section'>
               You scored {score} out of {questions.length}
            </div>
         ) : (
            <>
               <Timer initialSeconds='100' />
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
