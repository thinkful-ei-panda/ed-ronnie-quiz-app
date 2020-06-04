'use strict';
/**
 * Example store structure
 */
const store =
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
  ]
const data = {
  score: 0,
  index: 0
}

/********** TEMPLATE GENERATION FUNCTIONS **********/
function generateWelcome() {
  return `
  <h1>Welcome To Our Quiz</h1>
  <button class="btn btn-start">Take The Quiz Now</button>
  `;
}
function generateQuestion() {
  return `
  <form>
  <fieldset>
    <legend>${store.question}</legend>
    <input type="radio" id="choice1" name="choice" value="${choice1}" required>
    <label for="choice1">${choice1}</label>
    <input type="radio" id="choice2" name="choice" value="${choice2}" required>
    <label for="choice2">${choice2}</label>
    <input type="radio" id=choice3 name="choice" value="${choice3}" required>
    <label for="choice3">${choice3}</label>
    <input type="radio" id=choice4 name="choice" value="${choice4}" required>
    <label for="choice3">${choice4}</label>
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
  <button class="btn btn-submit">NEXT QUESTION</button>
  `;
}

function renderQuestion() {
  // render the shopping list in the DOM
  console.log('`generateQuestion` ran');
  const quizQuestionString = generateQuestion(store);
  // insert that HTML into the DOM
  $('main').html(quizQuestionString);
}
// These functions return HTML templates
/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store
/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)
function handleQuiz() {
  renderQuestion();
}
$(handleQuiz());