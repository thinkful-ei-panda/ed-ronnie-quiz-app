'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
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
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

// store.questions.forEach(element => {
//   console.log(`${element.question}`);
// })

/********** TEMPLATE GENERATION FUNCTIONS **********/
function generateQuestion(store) {
  return
  `<form class="q">
    <h4>1. Question 1 </h4>
    <input name="test" type="radio" value="inc" /> A) 1
    <input name="test" type="radio" value="ans" /> B) 2
    <input name="test" type="radio" value="inc" /> C) 3
    <input name="test" type="radio" value="inc" /> D) 4
    <input name="test" type="radio" value="inc" /> E) 5

    <button name='submit' type='submit'>Submit</button>
  </form>`;
}

console.log($(generateQuestion(store)));

// function generateQuestionString(questionList) {
//   console.log("Generating shopping list element");

//   const items = questionList.map((store) => generateQuestion(store));

//   return items.join("");
// }
// {
//   $(function () {
//     $('input[name="test"]').on('click', function () {
//       if ($(this).val() == 'ans') {
//         $('.exp').show(); $('.red').hide();
//       } else {
//         $('.exp').hide(); $('.red').show();
//       }
//     })
//   });
// }

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