import { createContext, ReactNode, useState } from 'react'
import { CoffeeType } from '../utils/listCoffees'

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

  function removeItem(idCoffee: number) {
    setItems((state) => {
      return state.filter((item) => item.product.coffee.id !== idCoffee)
    })
  }

  return (
    <CartContext.Provider value={{ items, addNewItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
