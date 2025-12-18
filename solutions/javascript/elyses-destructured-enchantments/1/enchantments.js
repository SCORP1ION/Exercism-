export function getFirstCard(deck) {
  const [first] = deck
  return first
}

export function getSecondCard(deck) {
  const [first, second] = deck
  return second
}

export function swapTwoCards(deck) {
  const [first, second] = deck
  return [second, first]
}

export function shiftThreeCardsAround(deck) {
  const [first, second, thrid] = deck
  return [second, thrid, first]
}

export function pickNamedPile(piles) {
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  const { chosen, disregarded } = piles
  return chosen
}

/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 * @returns {{ chosen: Card[], disregarded: Card[] }} new piles where the two piles are swapped
 */
export function swapNamedPile(piles) {
  const { chosen, disregarded } = piles
  
  // 🪄 Don't break the magic.
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  // 🚨 Do NOT touch the next line or Elyse will accidentally reveal the trick.
  return { disregarded: chosen, chosen: disregarded };
}
