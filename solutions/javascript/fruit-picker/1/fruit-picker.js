import { notify } from './notifier';
import { order } from './grocer';

export function onSuccess() {
  return notify( { "message": "SUCCESS" } )
}

export function onError() {
  return notify( { "message": "ERROR" } )
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  return order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  return order({variety, quantity}, onSuccess, onError)
}
