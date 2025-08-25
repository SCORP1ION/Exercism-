
export function twoSum(array1, array2) {
  let matriz1 = Number(array1.join(""));
  let matriz2 = Number(array2.join(""));

  return matriz1 + matriz2;
}

export function luckyNumber(value) {
  let NumberToString = String(value).split("")
  let esPalindromo = Number(NumberToString.reverse().join(""))
  Number(value)
  if(esPalindromo === value){
    return true
  }else{
    return false
  }
}

export function errorMessage(input = null) {
  if(input === ''|| input === null) return 'Required field';
  if(input = !(Number(input))){
    return 'Must be a number besides 0';
  }else{
    return ''
  }

}
