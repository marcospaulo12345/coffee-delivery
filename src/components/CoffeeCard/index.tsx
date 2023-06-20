import { useContext, useState, FormEvent } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { FormActions, CoffeeCardContainer, Tags } from './styles'
import { CoffeeType } from '../../utils/listCoffees'
import { CartContext } from '../../Context/CartContext'
import { toast } from 'react-toastify'
import { formatterPrice } from '../../utils/formatter'
import { InputQuantity } from '../InputQuantity'

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const notify = (status: number, mensage: string) => {
    if (status === 200) {
      toast.success(mensage)
    } else if (status === 400) {
      toast.error(mensage)
    }
  }
  const { addNewItem } = useContext(CartContext)

  function handleAddNewItemInCart(event: FormEvent) {
    event.preventDefault()
    addNewItem(coffee, quantity)
    notify(200, 'Item adicionado no carrinho')
  }

  function handleIncrease() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleDecrease() {
    setQuantity((quantity) => {
      if (quantity > 1) {
        return quantity - 1
      }

      return quantity
    })
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
      <FormActions onSubmit={handleAddNewItemInCart}>
        <span>
          R$ <strong>{formatterPrice.format(coffee.price)}</strong>
        </span>
        {/* <input
          type="number"
          onChange={handleQuantityChange}
          min={1}
          value={quantity}
          required
        /> */}
        <InputQuantity
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          quantity={quantity}
          size="medium"
        />
        <button type="submit">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </FormActions>
    </CoffeeCardContainer>
  )
}
