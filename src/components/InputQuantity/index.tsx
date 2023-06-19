import { Minus, Plus } from 'phosphor-react'
import { InputQuantityContainer } from './styles'

interface InputQuantityProps {
  handleIncrease: () => void
  handleDecrease: () => void
  quantity: number
  size: 'small' | 'medium'
}

export function InputQuantity({
  handleIncrease,
  handleDecrease,
  quantity,
  size,
}: InputQuantityProps) {
  return (
    <InputQuantityContainer size={size}>
      <Minus size={16} weight="regular" onClick={handleDecrease} />
      <input type="number" disabled value={quantity} />
      <Plus size={16} weight="regular" onClick={handleIncrease} />
    </InputQuantityContainer>
  )
}
