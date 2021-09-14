import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

const Progress = ({ done }) => {
   const [style, setStyle] = useState({})

   useEffect(() => {
      setTimeout(() => {
         setStyle({
            opacity: 1,
            width: `${done}%`,
         })
      }, 1)
   })

   return (
      <div className={styles.progress}>
         <div className={styles['progress-done']} style={style}></div>
      </div>
   )
}

export default Progress
