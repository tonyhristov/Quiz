import React from 'react'
import styles from './index.module.css'
import { motion } from 'framer-motion'

const EndScreen = (props) => {
   const { score, questionLength, handleStartAgain } = props

   return (
      <div className={styles.final}>
         You scored {score} out of {questionLength}
         <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.5 }}
            className={styles.button}
            onClick={() => {
               handleStartAgain()
            }}
         >
            <div className={styles['blue-part-final']}>
               <h1 className={styles['blue-part-text']}>Start Again</h1>
            </div>
         </motion.button>
      </div>
   )
}

export default EndScreen
