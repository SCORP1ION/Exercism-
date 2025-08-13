// Function task one
export function totalBirdCount(birdsPerDay){
  let total = 0;
  for(let i = 0; i < birdsPerDay.length; i++){
    total += birdsPerDay[i]
  }
  return total; 
}

// Function task two
export function birdsInWeek(birdsPerDay, Week) {
  const start = (Week - 1) * 7;
  const end = start + 7
  let total = 0; 

  for(let i = start; i < end; i++){
    total += birdsPerDay[i];
  }
  return total; 
}
// Function task three
export function fixBirdCountLog(birdsPerDay){

  for (let i = 0; i < birdsPerDay.length; i+=2){
    birdsPerDay[i] += 1
  }
  return birdsPerDay;
}


