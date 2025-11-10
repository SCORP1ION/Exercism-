
export function randomShipRegistryNumber() {
  let min = 1000
  let maximo = 9999
  let redondiar = Math.floor(min + Math.random() * (maximo - min + 1) + min)
  return `NCC-${redondiar}`
}

export function randomStardate() {
  let min = 41000.0;
  let max = 42000.0;
  let resultado = min + Math.random() * (max - min);
  return parseFloat(resultado.toFixed(11));
}

export function randomPlanetClass() {
  let clase = [ 'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  let index = Math.floor(Math.random() * clase.length)
  return clase[index]; 
}
