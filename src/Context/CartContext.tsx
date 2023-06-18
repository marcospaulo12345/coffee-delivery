import { createContext, ReactNode, useState } from 'react'
import { CoffeeType } from '../utils/listCoffees'
import { NewCheckoutFormData } from '../pages/Checkout'

interface ItemsType {
  product: {
    coffee: CoffeeType
  }
  qtd: number
}

interface CartContextType {
  items: ItemsType[]
  addNewItem: (newItem: CoffeeType, qtd: number) => void
  removeItem: (idCoffee: number) => void
  changeQtd: (coffeeId: number, newQtd: number) => void
  confirmOrder: (orderData: NewCheckoutFormData) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemsType[]>([])

  function addNewItem(newItem: CoffeeType, qtd: number) {
    setItems((state) => {
      return [...state, { product: { coffee: newItem }, qtd }]
    })
  }

  function changeQtd(coffeeId: number, newQtd: number) {
    if (newQtd === 0) {
      removeItem(coffeeId)
    } else {
      setItems(
        items.map((item) => {
          if (item.product.coffee.id === coffeeId) {
            return { ...item, qtd: newQtd }
          } else {
            return item
          }
        }),
      )
    }
  }

  function removeItem(idCoffee: number) {
    setItems((state) => {
      return state.filter((item) => item.product.coffee.id !== idCoffee)
    })
  }

  function confirmOrder(orderData: NewCheckoutFormData) {
    console.log(orderData)
    console.log(items)

    setItems([])
  }

  return (
    <CartContext.Provider
      value={{ items, addNewItem, removeItem, changeQtd, confirmOrder }}
    >
      {children}
    </CartContext.Provider>
  )
}
