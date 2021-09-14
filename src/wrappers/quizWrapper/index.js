import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Timer from '../../components/timer'
import CodeHighlighter from '../../components/codeHighlighter'
import questions from '../../utils/questions'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const QuizWrapper = () => {
   const [value, setValue] = useState('')

   const answers = questions.questionOne.answers

   const renderAnswer = () => {
      for (const key in answers) {
         return (
            <button
               className={styles.button}
               onClick={() => {
                  setValue('B')
               }}
            >
               <div className={styles['blue-part']}>
                  <h1 className={styles['blue-part-text']}>{key}</h1>
               </div>
               <div className={styles['description-part']}>
                  <SyntaxHighlighter language='javascript' style={vs}>
                     {answers[key]}
                  </SyntaxHighlighter>
               </div>
            </button>
         )
      }
   }

   return (
      <div className={styles.wrapper}>
         <Timer initialSeconds='100' />
         <h1 className={styles.name}>{questions.questionOne.name}</h1>
         <CodeHighlighter>{questions.questionOne.description}</CodeHighlighter>
         <div className={styles['button-wrapper']}>{renderAnswer()}</div>
      </div>
   )
}

export default QuizWrapper
