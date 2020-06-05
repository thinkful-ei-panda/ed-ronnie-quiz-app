'use strict';
/**
 * Example store structure
 */
const store = {
  questions: [
    {
      question: `<h2>Which glass will get full first?</h2>
      <img src="images/glass3.jpeg"></img>
                `,
      answers: [
        '7',
        '5',
        '3',
        '6'
      ],
      correctAnswer: '3'
    },
    {
      question: `<h2>How many circles are there?</h2>
      <img src="images/how_many_circles.jpeg"></img>
      `,
      answers: [
        '0',
        '7',
        '1',
        '16'
      ],
      correctAnswer: '16'
    },
    {
      question:  `<h2>How many animals are there?</h2>
      <img src="images/how-many-animals.jpg"></img>
      ` ,
      answers: [
        '5',
        '10',
        '16',
        '24'
      ],
      correctAnswer: '16'
    },
    {
      question:  `<h2>How many triangles are there?</h2>
      <img src="images/how-many-triangles.jpg"></img>
      `,
      answers: [
        '8',
        '10',
        '20',
        '24'
      ],
      correctAnswer: '24'
    },
    {
      question:  `<h2>How many legs does the elephant have?</h2>
      <img src="images/howmanylegs.jpg"></img>
      `,
      answers: [
        '4',
        '1',
        '8',
        '2'
      ],
      correctAnswer: '1'
    },
  ],
  index: 0,
  score: 0,
  i: 0,
};
/********** TEMPLATE GENERATION FUNCTIONS **********/
function generateWelcome() {
  return `
  <div class="wrapper">
  <h2>Let's See How You Do</h2>
  <button class="btn btn-start">START</button>
  </div>
  `;
}
function generateQuestionForm() {
  return `
  <div class="counter">
    <p>question:${store.index + 1} of ${store.questions.length}</p>
    <p>Current Score is ${store.score} out of ${store.questions.length}</p>
  </div>
  <div class="wrapper">
  <form>
  <fieldset>
  
  
    <legend>${store.questions[store.i].question}</legend>
    <label for="choice1">
    <input type="radio" name="answers" value="${store.questions[store.i].answers[0]}" required>
    ${store.questions[store.i].answers[0]}
    </label>
    <label for="choice2">
    <input type="radio" name="answers" value="${store.questions[store.i].answers[1]}" >
    ${store.questions[store.i].answers[1]}
    </label>
    <label for="choice3">
    <input type="radio" name="answers" value="${store.questions[store.i].answers[2]}" >
    ${store.questions[store.i].answers[2]}
    </label>
    <label for="choice4">
    <input type="radio" name="answers" value="${store.questions[store.i].answers[3]}" >
    ${store.questions[store.i].answers[3]}
    </label>
    <input type="submit" class="btn btn-submit">
  </fieldset>
  </form>
  
  </div>
  `;
}
function generateCounter() {
  return `
  <div class="counter">
    <p>question:${store.index + 1} of ${store.questions.length}</p>
    <p>Current Score is ${store.score} out of ${store.questions.length}</p>
  </div>
  `;
}
function generateCorrectSlide() {
  return `
  <div class="wrapper">
  <h2>YOU ARE CORRECT!</h2>
  <button class="btn btn-next">NEXT QUESTION</button>
  </div>
  `;
}
function generateWrongSlide() {
  return `
  <div class="wrapper">
    <h2>YOU ARE WRONG!</h2>
    <p>The correct answer was ${store.questions[store.i].correctAnswer}</p>
    <button class="btn btn-next">NEXT QUESTION</button>
  </div>
  `;
}
function generateFinalScore() {
  return `
  <div class= "wrapper">
  <h2>YOU DID IT!</h2>
  <p>You got ${store.score} out of ${store.questions.length}!</p>
  <p>GOOD JOB!</p>
  <button class="btn btn-reset">Take the quiz again :D</button>
  </div>
  `;
}
// These functions return HTML templates
/********** RENDER FUNCTION(S) **********/
function renderGenerateWelcome() {
  const html = generateWelcome();
  $('main').html(html);
}
function renderCounter() {
  const html = generateCounter();
  $('main').append(html);
}
function renderQuestionForm() {
  const html = generateQuestionForm();
  $('main').html(html);
}
function renderCorrectSlide() {
  const html = generateCorrectSlide();
  $('main').html(html);
}
function renderWrongSlide() {
  const html = generateWrongSlide();
  $('main').html(html);
}
function renderFinalScore() {
  const html = generateFinalScore();
  $('main').html(html);
}
// This function conditionally replaces the contents of the <main> tag based on the state of the store
/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, etc)
function handleStart() {
  $('main').on('click', '.btn-start', () => {
    event.preventDefault();
    renderQuestionForm();
  });
}
function handleSubmit() {
  $('main').on('submit', () => {
    if ($('input[name="answers"]:checked').val() === store.questions[store.i].correctAnswer) {
      store.score++;
      renderCorrectSlide();
    } else {
      renderWrongSlide();
    }
    renderCounter();
  });
}
function handleNext() {
  $('main').on('click', '.btn-next', () => {
    if (store.index >= store.questions.length - 1) {
      renderFinalScore();
    } else {
      store.index++;
      store.i++;
      renderQuestionForm();
    }
  });
}
function handleRestart() {
  $('main').on('click', '.btn-reset', () => {
    store.index = 0;
    store.score = 0;
    store.i = 0;
    renderGenerateWelcome();
  });
}
function startPage() {
  renderGenerateWelcome();
  handleStart();
  handleSubmit();
  handleNext();
  handleRestart();
}
$(startPage());