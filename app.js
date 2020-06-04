'use strict';
/**
 * Example store structure
 */
const store = {
  questions :
  [
    {
      question: 'What color is broccoli?',
      choice1: 'red',
      choice2: 'orange',
      choice3: 'pink',
      choice4: 'green',
      correctAnswer: 'green'
    },
    {
      question: 'What color is broccoli?',
      choice1: 'red',
      choice2: 'orange',
      choice3: 'pink',
      choice4: 'green',
      correctAnswer: 'green'
    },
    {
      question: 'What color is broccoli?',
      choice1: 'red',
      choice2: 'orange',
      choice3: 'pink',
      choice4: 'green',
      correctAnswer: 'green'
    },
    {
      question: 'What color is broccoli?',
      choice1: 'red',
      choice2: 'orange',
      choice3: 'pink',
      choice4: 'green',
      correctAnswer: 'green'
    },
    {
      question: 'What color is broccoli?',
      choice1: 'red',
      choice2: 'orange',
      choice3: 'pink',
      choice4: 'green',
      correctAnswer: 'green'
    },
  ],
  score: 0,
  index: 0
}
// store.questions.forEach(element => {
//   console.log(`${element.question}`);
// })
/********** TEMPLATE GENERATION FUNCTIONS **********/
function generateWelcome() {
  return `
  <div class="wrapper">
  <h2>Let's See How You Do</h2>
  <button class="btn btn-start">START</button>
  </div>
  `;
}
function generateQuestionForm(store) {
  return `
  <form>
  <fieldset>
    <legend>${store.question}</legend>
    <input type="radio" name="choice" value="${store.choice1}" required>
    <label for="choice1">${store.choice1}</label>
    <input type="radio" name="choice" value="${store.choice2}" required>
    <label for="choice2">${store.choice2}</label>
    <input type="radio" name="choice" value="${store.choice3}" required>
    <label for="choice3">${store.choice3}</label>
    <input type="radio" name="choice" value="${store.choice4}" required>
    <label for="choice4">${store.choice4}</label>
    <button class="btn btn-submit">Submit</button>
  </fieldset>
  </form>
`;
}
function generateCounter() {
  return `
  <div>
    <p>question:${data.index + 1} of ${store.length}</p>
    <p>Current Score is ${data.score} out of ${store.length}</p>
  </div>
  `;
}
function generateCorrectSlide() {
  return `
  <h2>YOU ARE CORRECT!</h2>
  <button class="btn btn-submit">NEXT QUESTION</button>
  `;
}
function generateWrongSlide() {
  return `
  <h2>YOU ARE WRONG!</h2>
  <p>The correct answer was ${store.correctAnswer}</p>
  <button class="btn btn-submit">NEXT QUESTION</button>
  `;
}
function generateFinalScore(){
  return `
  <h2>YOU DID IT!</h2>
  <p>You got ${data.score} out of ${store.length}!</p>
  <p>GOOD JOB!</p>
  <button class="btn btn-reset">Take the quiz again :D</button>
  `;
}

// These functions return HTML templates
/********** RENDER FUNCTION(S) **********/
function renderGenerateWelcome(){
  const html = generateWelcome();
  $('main').html(html);
}


// This function conditionally replaces the contents of the <main> tag based on the state of the store
/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)
function startPage(){
  renderGenerateWelcome();
}
$(startPage());