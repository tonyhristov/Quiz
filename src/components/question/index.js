import React from 'react'
import Progress from '../progressBar'
import styles from './index.module.css'
import CodeHighlighter from '../codeHighlighter'
import { motion } from 'framer-motion'
import questions from '../../utils/questions'

const Question = (props) => {
   const { seconds, currentQuestion, handleAnswerOptionClick } = props

   return (
      <>
         <div>
            <Progress done={seconds} />
         </div>
         <h1 className={styles.name}>{questions[currentQuestion].name}</h1>
         <CodeHighlighter type='description'>
            {questions[currentQuestion].description}
         </CodeHighlighter>
         <div className={styles['button-wrapper']}>
            {questions[currentQuestion].answers.map((key) => {
               const value = key.value
               return (
                  <motion.button
                     key={value}
                     whileHover={{ scale: 0.9 }}
                     whileTap={{ scale: 2 }}
                     className={styles.button}
                     onClick={() => {
                        handleAnswerOptionClick(key.isCorrect)
                     }}
                     value={value}
                  >
                     <div className={styles['blue-part']}>
                        <h1 className={styles['blue-part-text']}>{value}</h1>
                     </div>
                     <div key={value} className={styles['description-part']}>
                        <CodeHighlighter type='answer'>
                           {key.answerName}
                        </CodeHighlighter>
                     </div>
                  </motion.button>
               )
            })}
         </div>
      </>
   )
}

export default Question
