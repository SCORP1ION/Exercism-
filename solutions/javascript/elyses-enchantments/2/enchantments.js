
// Function 1: Retrieve a card from a stack
export function getItem(cards, position){
  return cards[position]
}

// Function 2: Exchange a card in the stack
export function setItem(card, position, replacementCard){
  card[position] = replacementCard;
  return card
}

// Function 3: Insert a card at the pop of the stack
export function insertItemAtTop(cards, newCard){
  cards.push(newCard)
  return cards
}

// Function 4: Remove a card from the stack
export function removeItem(cards, position){
  cards.splice(position, 1)
  return cards
}

// Function 5: Remove the top card from the stack 
export function removeItemFromTop(cards) {
  cards.pop()
  return cards
}

// Function 6: Insert a card at the bottom of the stack
export function insertItemAtBottom(cards, newCard){
  cards.unshift(newCard)
  return cards;
}

// Function 7: Remove a card from the bottom of the stack 
export function removeItemAtBottom(cards){
  cards.shift()
  return cards
}

// Function 8: Check the size of the stack
export function checkSizeOfStack(cards, stackSize){
  return cards.length === stackSize;  
}

