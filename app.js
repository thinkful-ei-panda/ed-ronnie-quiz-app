'use strict';
/**
 * Example store structure
 */
const store = {
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    },
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
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