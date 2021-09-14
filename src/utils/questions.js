const questions = {
   questionOne: {
      name: 'Which is the Missing Line',
      description: `item.addEventListener('click', ()=>{
        console.log(item.getAttribute('payload'))
     })`,
      answers: {
         A: "const item = document.querySelector('./item')",
         B: 'const item = document',
      },
   },
}

export default questions
