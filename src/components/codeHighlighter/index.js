import React from 'react'
import styles from './index.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeHighlighter = (props) => {
   const codeString = props.children
   return (
      <div className={styles.code}>
         <SyntaxHighlighter
            language='javascript'
            style={vs}
            wrapLongLines={true}
         >
            {codeString}
         </SyntaxHighlighter>
      </div>
   )
}

export default CodeHighlighter
