import { ShoppingCart } from 'phosphor-react'
import { Actions, CoffeeCardContainer, Tags } from './styles'
import { CoffeeType } from '../../utils/listCoffees'

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </Tags>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>
      <Actions>
        <span>
          R$ <strong>{coffee.price}</strong>
        </span>
        <input type="number" />
        <button>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </Actions>
    </CoffeeCardContainer>
  )
}
