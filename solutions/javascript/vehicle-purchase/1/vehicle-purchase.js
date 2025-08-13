
// export function needsLicense(kind){ // Option one
//   if((kind === 'Car' ||kind === 'car') || (kind === 'Truck' || kind === 'truck')){
//     return true
//   }else{
//     return false
//   }
// }

export function needsLicense(kind) { // Option two
  return kind === 'car' || kind === 'truck'
}

export function chooseVehicle(option1, option2) {
  // other solution
  // const better = option1 < option2 ? option1 : option2
  // return `${better} is clearly the better choice.`
  if(option1 < option2){
    return option1 + ' is clearly the better choice.'
  }else{
    return option2 + ' is clearly the better choice.'
  }
}


export function calculateResellPrice(OriginalPrice, age) {
  if( age<3 ){
    return OriginalPrice * 0.80;
  }else if( age<=10 ){
    return OriginalPrice * 0.70;
  }else{
    return OriginalPrice * 0.50;
  }
}



