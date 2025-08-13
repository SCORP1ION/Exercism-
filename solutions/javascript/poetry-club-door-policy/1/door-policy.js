
export function frontDoorResponse(FirstLetter) {
  return FirstLetter[0]
}

export function frontDoorPassword(CapitalizeAWord){
  // La letra que este en el posicio 0 sera mayusculas y las demas en minuscula
  return CapitalizeAWord[0].toUpperCase() + CapitalizeAWord.slice(1).toLowerCase()
}

export function backDoorResponse(LastLetter) {
  // Del argumento LastLetter va a ignorar los espacio y toma la ultima letra -1 si hay espacio
  return LastLetter.trim().slice(-1)
}

export function backDoorPassword(CapitalizedPassword) {
  return frontDoorPassword(CapitalizedPassword) + ', ' + 'please'
}

