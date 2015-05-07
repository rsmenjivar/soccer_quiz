// list of questions. each question has:
  // question
  // options
  // correct answer
var questions = [
  {
    'question': 'Question 1: Which European Team.....',
    'id': 1,
    'options': {
      'Bayern Munich': true,
      'Barcelona': false,
      'Real Madrid': false,
      'AC Milan': false
    }
  },
  {
    'question': 'Question 2: ....',
    'id': 2,
    'options': {
      'Bayern Munich': true,
      'Barcelona': false,
      'Real Madrid': false,
      'AC Milan': false
    }
  },
  {
    'question': 'Question 3: .....',
    'id': 3,
    'options': {
      'Bayern Munich': true,
      'Barcelona': false,
      'Real Madrid': false,
      'AC Milan': false
    }
  }
];
var current_question = 1;
var num_of_questions = questions.length;
var results = 0;

// when you click the button....
$(document).ready(function() {

  // ON FIRST LOAD
  
  // Add question/answers to DOM
  //$('#questions-box')..... ADD question
  //$('#answers-box')..... ADD answers

  // ON CLICK
  $('#submit').click(function() {
    // figure out result of question - add to total results
    if (CORRECT) {
      // store answer
      results++;
    }
    

    if (current_question < num_of_questions) {
      // go to next question

      current_question++;
      console.log(current_question);
    } else {

      // ON SUBMITTING OF LAST QUESTION

      // if last question, then give result

    };
    
  });



});
  

