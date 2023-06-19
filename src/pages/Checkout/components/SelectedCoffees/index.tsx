import { useContext } from 'react'
import {
  InfoPayment,
  ListSelectedCoffees,
  SelectedCoffeesContainer,
} from './styles'
import { CartContext } from '../../../../Context/CartContext'
import { formatterPriceWithSign } from '../../../../utils/formatter'
import { CoffeeCardCart } from './CoffeeCardCart'

export function SelectedCoffees() {
  const { items } = useContext(CartContext)

  const totalItems = items.reduce(
    (acc, item) => acc + item.product.coffee.price * item.qtd,
    0,
  )
  const deliveryValue = 3.5
  const total = totalItems + deliveryValue

  return (
    <SelectedCoffeesContainer>
      <ListSelectedCoffees>
        {items.map((item) => {
          return <CoffeeCardCart key={item.product.coffee.id} item={item} />
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
      <button type="submit">confirmar pedido</button>
    </SelectedCoffeesContainer>
  )
}
