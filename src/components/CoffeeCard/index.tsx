import { ShoppingCart } from 'phosphor-react'
import coffee from '../../assets/coffee.svg'
import { CoffeeCardContainer } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffee} alt="" />
      <span>Tradicional</span>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <input type="number" />
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </CoffeeCardContainer>
  )
}
