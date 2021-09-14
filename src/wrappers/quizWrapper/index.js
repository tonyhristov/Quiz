import React, { useState, useEffect, useCallback } from 'react'
import styles from './index.module.css'
import Timer from '../../components/timer'
import CodeHighlighter from '../../components/codeHighlighter'
import questions from '../../utils/questions'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const QuizWrapper = () => {
   const [answer, setAnswer] = useState()

   const answers = questions.questionOne.answers

   const handleSubmit = (e) => {
      setAnswer(e.target.value)
   }

   console.log(answer)

   return (
      <div className={styles.wrapper}>
         <Timer initialSeconds='100' />
         <h1 className={styles.name}>{questions.questionOne.name}</h1>
         <CodeHighlighter>{questions.questionOne.description}</CodeHighlighter>
         <div className={styles['button-wrapper']}>
            {Object.keys(answers).map(function (key) {
               return (
                  // <button
                  //    className={styles.button}
                  //    onClick={(e) => {
                  //       handleSubmit(e)
                  //    }}
                  //    value={key}
                  // >
                  //    <div className={styles['blue-part']}>
                  //       <h1 className={styles['blue-part-text']}>{key}</h1>
                  //    </div>
                  //    <div className={styles['description-part']}>
                  //       <SyntaxHighlighter language='javascript' style={vs}>
                  //          {answers[key]}
                  //       </SyntaxHighlighter>
                  //    </div>
                  // </button>
                  <label>
                     <input type='radio' value={key} />
                     <SyntaxHighlighter language='javascript' style={vs}>
                        {answers[key]}
                     </SyntaxHighlighter>
                  </label>
               )
            })}
         </div>
      </div>
   )
}

export default QuizWrapper
