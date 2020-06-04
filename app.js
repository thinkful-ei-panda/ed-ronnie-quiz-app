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
  i: 0
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
  // console.log(store['questions'][store.i].question);
  return `
  <div class="wrapper">
  <form>
  <fieldset>
    <legend>${store['questions'][store.i].question}</legend>

    <label for="choice1">
    <input type="radio" name="answers" value="${store['questions'][store.i].answers[0]}" required>
    ${store['questions'][store.i].answers[0]}
    </label>

    <label for="choice2">
    <input type="radio" name="answers" value="${store['questions'][store.i].answers[1]}" required>
    ${store['questions'][store.i].answers[1]}
    </label>

    <label for="choice3">
    <input type="radio" name="answers" value="${store['questions'][store.i].answers[2]}" required>
    ${store['questions'][store.i].answers[2]}
    </label>

    <label for="choice4">
    <input type="radio" name="answers" value="${store['questions'][store.i].answers[3]}" required>
    ${store['questions'][store.i].answers[3]}
    </label>

    <button class="btn btn-submit">Submit</button>
  </fieldset>
  </form>
  </div>
  `;
  console.log(input[name = "answers"]);

}

function generateCounter() {
  return `
  <div class = "counter">
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
    <p>The correct answer was ${store.questions[i].correctAnswer}</p>
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
  $('main').html(html);
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
  const html = generateFinalScore()
  $('main').html(html);
}


// This function conditionally replaces the contents of the <main> tag based on the state of the store
/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, etc)

function handleStart() {
  $('main').on('click', '.btn-start', () => {
    // event.preventDefault();
    renderCounter();
    renderQuestionForm();
  });
}

function handleSubmit() {
  $('main').on('click', '.btn-submit', () => {
    if ($('input[name="answers"]:checked').val() === store['questions'][store.i].correctAnswer) {
      store.score++;
      renderCorrectSlide();
    } else {
      renderWrongSlide();
    }
    renderCounter();
  });
}

function handleNext() {
  $('main').on('submit', '.btn-next', () => {
    if (store.index = store.questions.length) {
      renderFinalScore()
    } else {
      store.index++;
      store.i++;
      renderQuestionForm();
      // renderState();
    }
  });
}

function startPage() {
  renderGenerateWelcome();
  handleStart();
  handleSubmit();
  handleNext();
}
$(startPage());