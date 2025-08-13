// Funtion takes one
export function timeToMixJuice(name){
  switch(name){
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5; 
  }
}

// Function task two
// Tarea 2: Cortar limas hasta alcanzar la cantidad de gajos necesarios.

export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let limesCut = 0;
  let wedges = 0;

  while((limesCut < limes.length) && (totalWedges <= wedgesNeeded)){
    switch(limes[limesCut]){
      case "small": 
        wedges = 6;
        break;
      case "medium":
        wedges = 8;
        break;
      case "large":
        wedges = 10;
        break;
    }
    totalWedges += wedges
    
    if(wedgesNeeded > 0){
      limesCut++
    }
  }
  return limesCut;
}

// Tarea 3: Devolver los pedidos que no alcanzaron a hacerse en el tiempo dado.
export function remainingOrders(timeLeft, orders){
  while (timeLeft > 0) {
    timeLeft = timeLeft - timeToMixJuice(orders[0])
    orders.shift()
  }
  return orders;
}





