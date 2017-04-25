const collission = require('./collission.js');
const prompt = require('prompt');

const getInput = function(message){
  return new Promise(function(resolve, reject){
    prompt.get(message, function(err, result){
      if(err){
        reject(err);
      } else {
        resolve(result);
      }
    });
  })
};



var board = [];
for(var i = 0; i < 9; i++){
  board[i] = " ";
}

const printBoard = function(board){
  var leftMargin = "  ";
  var line = "-------------";
  const cell = function(val){
    return `| ${val} |`;
  };

  var derp = 
`${line}
 | ${board[0]} | ${board[1]} | ${board[2]} |
 ${line}
 | ${board[3]} | ${board[4]} | ${board[5]} |
 ${line}
 | ${board[6]} | ${board[7]} | ${board[8]} |
 ${line}`;

  console.log('\n',derp);
};

printBoard(board);

prompt.start();



const playRound = function(roundNum, maxRounds){
if(roundNum >= maxRounds){
  return "done"
}
console.log("Board Status:");
  printBoard(board);

  getInput('Next move?')
  .then(pos => {
    console.log("pos:", pos);
    board[+pos['Next move?']] = 'X';
    playRound(roundNum + 1, maxRounds);

  })



}
playRound(0,10)

