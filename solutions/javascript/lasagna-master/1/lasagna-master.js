// Task one
export function cookingStatus(time){
  if(time === 0)return 'Lasagna is done.'
  if(time > 0) return 'Not done, please wait.'
  return 'You forgot to set the timer.'
}

// Task two
export function preparationTime(layers, time = 2){
    return layers.length * time
}

// Task three
export function quantities(ingredients){
  // definicion de variables en ceros
  let noodles = 0
  let sauce = 0

  // itera en el array 
  for(let ingredient of ingredients){
    // en caso de que sea exactamente igual se le suma su cantidad
    if(ingredient === 'noodles') noodles += 50
    if(ingredient === 'sauce') sauce += 0.2
  }
  return{
    noodles,
    sauce
  }
  
}

// Task four
export function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length - 1])
}

// Task five
export function scaleRecipe(recipe, portions){
  let scaled = {}

  for(let ingredients in recipe){
    scaled[ingredients] = recipe[ingredients] * (portions / 2)
  }
  return scaled
}

