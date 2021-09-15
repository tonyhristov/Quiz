const questions = [
   {
      name: 'Which is the Missing Line',
      description: `item.addEventListener('click', ()=>{
        console.log(item.getAttribute('payload'))
     })`,
      answers: [
         {
            answerName: "const item = document.querySelector('./item')",
            value: 'A',
            isCorrect: true,
         },
         { answerName: 'const item = document', value: 'B', isCorrect: false },
      ],
   },
   {
      name: 'Second Question',
      description: `second question description`,
      answers: [
         { answerName: 'Answer A', value: 'A', isCorrect: false },
         { answerName: 'Answer B', value: 'B', isCorrect: false },
         { answerName: 'Answer C', value: 'C', isCorrect: true },
         { answerName: 'Answer D', value: 'D', isCorrect: false },
      ],
   },
   {
      name: 'Third Question',
      description: `third question description`,
      answers: [
         { answerName: 'Answer A', value: 'A', isCorrect: false },
         { answerName: 'Answer B', value: 'B', isCorrect: true },
         { answerName: 'Answer C', value: 'C', isCorrect: false },
         { answerName: 'Answer D', value: 'D', isCorrect: false },
      ],
   },
]

export default questions
