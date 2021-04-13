var timerEL = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var questions = [
    { q: ' question 1 goes here.', 
      a: 'answer 1 goes here'},
    { q: ' question 2 goes here.', 
      a: 'answer 2 goes here'},
    { q: ' question 3 goes here.',
      a: 'answer 3 goes here'},
    { q: ' question 4 goes here.', 
      a: 'answer 4 goes here'},
    { q: ' question 5 goes here.', 
      a: 'answer 5 goes here'}
];

// Start game with a score of 0.
var score = 0;

