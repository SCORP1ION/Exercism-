
export function createScoreBoard() {
   return{
     'The Best Ever' : 1000000
   }
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score
  return scoreBoard
}



export function removePlayer(scoreBoard, playerName) {
  delete scoreBoard[playerName];
  return scoreBoard
}

export function updateScore(scoreBoard, playerName, points){
  if (scoreBoard[playerName] !== undefined) {
    scoreBoard[playerName] += points
  }
  return scoreBoard
}


export function applyMondayBonus(scoreBoard){
  for(let player in scoreBoard){
    scoreBoard[player] += 100
  }
  return scoreBoard
}	


