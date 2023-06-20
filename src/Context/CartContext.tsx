import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CoffeeType } from '../utils/listCoffees'
import { NewCheckoutFormData } from '../pages/Checkout'
import { itemsCartReducer, ItemsType } from '../reducers/itemsCart/reducer'
import {
  addNewItemAction,
  changeQtdAction,
  confirmOrderAction,
  removeItemAction,
} from '../reducers/itemsCart/actions'

interface CartContextType {
  items: ItemsType[]
  addNewItem: (newItem: CoffeeType, qtd: number) => void
  removeItem: (idCoffee: number) => void
  changeQtd: (coffeeId: number, type: 'increase' | 'decrease') => void
  confirmOrder: (orderData: NewCheckoutFormData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsState, dispatch] = useReducer(
    itemsCartReducer,
    {
      items: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:items-cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { items } = itemsState

  useEffect(() => {
    const stateJSON = JSON.stringify(itemsState)

    localStorage.setItem('@coffee-delivery:items-cart-state-1.0.0', stateJSON)
  }, [itemsState])

  function addNewItem(newItem: CoffeeType, qtd: number) {
    dispatch(addNewItemAction(newItem, qtd))
  }

  function changeQtd(coffeeId: number, type: 'increase' | 'decrease') {
    dispatch(changeQtdAction(coffeeId, type))
  }

  function removeItem(idCoffee: number) {
    dispatch(removeItemAction(idCoffee))
  }

  function confirmOrder(orderData: NewCheckoutFormData) {
    console.log(orderData)
    console.log(items)

    dispatch(confirmOrderAction(orderData))
  }

  return (
    <CartContext.Provider
      value={{ items, addNewItem, removeItem, changeQtd, confirmOrder }}
    >
      {children}
    </CartContext.Provider>
  )
}
