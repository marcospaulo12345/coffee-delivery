import { useContext } from 'react'
import { Trash } from 'phosphor-react'
import {
  InfoPayment,
  ListSelectedCoffees,
  SelectedCoffee,
  SelectedCoffeesContainer,
} from './styles'
import { CartContext } from '../../../../Context/CartContext'

export function SelectedCoffees() {
  const { items, removeItem } = useContext(CartContext)

  const totalItems = items.reduce(
    (acc, item) => acc + item.product.coffee.price * item.qtd,
    0,
  )
  const deliveryValue = 3.5
  const total = totalItems + deliveryValue

  function handleRemoveItemToCart(idCoffee: number) {
    removeItem(idCoffee)
  }

  return (
    <SelectedCoffeesContainer>
      <ListSelectedCoffees>
        {items.map((item) => {
          return (
            <SelectedCoffee key={item.product.coffee.id}>
              <img src={item.product.coffee.image} alt="" />
              <div>
                <h3>{item.product.coffee.name}</h3>
                <div>
                  <input type="number" placeholder="1" value={item.qtd} />
                  <button
                    onClick={() =>
                      handleRemoveItemToCart(item.product.coffee.id)
                    }
                  >
                    <Trash size={16} weight="light" />
                    <span>Remover</span>
                  </button>
                </div>
              </div>
              <span>{item.product.coffee.price}</span>
            </SelectedCoffee>
          )
        })}
      </ListSelectedCoffees>

      <InfoPayment>
        <ul>
          <li>Total de items</li>
          <li>Entrega</li>
          <li>Total</li>
        </ul>

        <ul>
          <li>{totalItems}</li>
          <li>{deliveryValue}</li>
          <li>{total}</li>
        </ul>
      </InfoPayment>
      <button>confirmar pedido</button>
    </SelectedCoffeesContainer>
  )
}
