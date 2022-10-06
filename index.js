var readlineSync = require('readline-sync');

var score = 0;
var userAnswer = readlineSync.question('What is your name? ')

console.log('Welcome! '+ userAnswer + " to DO YOU KNOW MARVEL?");

function play(question, answer){
  var userAns = readlineSync.question(question);
  
  if(userAns == answer){
  console.log('right!!')
  score = score+1;
  }else{
  console.log('oops!! wrong')
  }
}

var quesArray = [
  {
    question: "How many infinity stones are there? ",
    answer: 6,
  },
  {
    question: "What is the name of thor's second hammer? ",
    answer: "stormbreaker",
  },
  {
    question: "What is the name of guider to soul stone? ",
    answer: "redskull"
  },
  {
    question: "What is the name of Captain America's first love?",
    answer: "peggy carter"
  },
  {
    question: "what is the name of tony stark's father?",
    answer: "howard stark"
  }
]

for (let i = 0; i < quesArray.length; i++){
  currentQues = quesArray[i];
  console.log(play(currentQues.question, currentQues.answer))
}

console.log("YOU SCORED " + score + "!!!");

