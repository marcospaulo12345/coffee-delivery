import { useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Actions, CoffeeCardContainer, Tags } from './styles'
import { CoffeeType } from '../../utils/listCoffees'
import { CartContext } from '../../Context/CartContext'

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addNewItem } = useContext(CartContext)

  function handleAddNewItemInCart() {
    addNewItem(coffee, 2)
  }

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
        <button onClick={handleAddNewItemInCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </Actions>
    </CoffeeCardContainer>
  )
}
