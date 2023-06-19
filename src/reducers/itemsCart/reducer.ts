import { CoffeeType } from '../../utils/listCoffees'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface ItemsType {
  product: {
    coffee: CoffeeType
  }
  qtd: number
}

interface ItemsState {
  items: ItemsType[]
}

export function itemsCartReducer(state: ItemsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.items.push({
          product: { coffee: action.payload.newItem },
          qtd: action.payload.qtd,
        })
      })
    case ActionTypes.CHANGE_QTD: {
      const itemToChangeIndex = state.items.findIndex((item) => {
        return item.product.coffee.id === action.payload.coffeeId
      })

      if (itemToChangeIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        const item = draft.items[itemToChangeIndex]
        item.qtd =
          action.payload.type === 'increase' ? item.qtd + 1 : item.qtd - 1
      })
    }
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        draft.items = draft.items.filter(
          (item) => item.product.coffee.id !== action.payload.idCoffee,
        )
      })
    case ActionTypes.CONFIRM_ORDER:
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}
