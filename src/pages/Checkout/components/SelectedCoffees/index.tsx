import { useContext, ChangeEvent } from 'react'
import { Trash } from 'phosphor-react'
import {
  InfoPayment,
  ListSelectedCoffees,
  SelectedCoffee,
  SelectedCoffeesContainer,
} from './styles'
import { CartContext } from '../../../../Context/CartContext'
import { formatterPriceWithSign } from '../../../../utils/formatter'

export function SelectedCoffees() {
  const { items, removeItem, changeQtd } = useContext(CartContext)

  const totalItems = items.reduce(
    (acc, item) => acc + item.product.coffee.price * item.qtd,
    0,
  )
  const deliveryValue = 3.5
  const total = totalItems + deliveryValue

  function handleRemoveItemToCart(idCoffee: number) {
    removeItem(idCoffee)
  }

  function handleChangeQtd(
    coffeeId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    changeQtd(coffeeId, Number(event.target.value))
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
                  <input
                    type="number"
                    placeholder="1"
                    value={item.qtd}
                    onChange={(event) =>
                      handleChangeQtd(item.product.coffee.id, event)
                    }
                  />
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
              <span>
                {formatterPriceWithSign.format(item.product.coffee.price)}
              </span>
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
          <li>{formatterPriceWithSign.format(totalItems)}</li>
          <li>{formatterPriceWithSign.format(deliveryValue)}</li>
          <li>{formatterPriceWithSign.format(total)}</li>
        </ul>
      </InfoPayment>
      <button>confirmar pedido</button>
    </SelectedCoffeesContainer>
  )
}
