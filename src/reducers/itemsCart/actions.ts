import { NewCheckoutFormData } from '../../pages/Checkout'
import { CoffeeType } from '../../utils/listCoffees'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  CHANGE_QTD = 'CHANGE_QTD',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export function addNewItemAction(newItem: CoffeeType, qtd: number) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newItem,
      qtd,
    },
  }
}

export function changeQtdAction(
  coffeeId: number,
  type: 'increase' | 'decrease',
) {
  return {
    type: ActionTypes.CHANGE_QTD,
    payload: {
      coffeeId,
      type,
    },
  }
}

export function removeItemAction(idCoffee: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: { idCoffee },
  }
}

export function confirmOrderAction(orderData: NewCheckoutFormData) {
  return {
    type: ActionTypes.CONFIRM_ORDER,
    payload: { orderData },
  }
}
