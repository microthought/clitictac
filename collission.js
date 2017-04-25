
const streak = (set) => {
  var same = set.every(val => val === set[0]);
  return same ? set[0] : null;
};

const rowWinner = function(board){

  for(var row = 0; row < 3; row++){
    var start = row * 3
    var row = [board[start], board[start+1], board[start+2]];
    var winner = streak(row);
    if(winner){
      return winner;
    }
  }
  return null;
}




module.exports =  {
  streak: streak
};
