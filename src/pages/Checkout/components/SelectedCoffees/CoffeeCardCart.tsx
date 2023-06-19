import { Trash } from 'phosphor-react'
import { InputQuantity } from '../../../../components/InputQuantity'
import { SelectedCoffee } from './styles'
import { formatterPriceWithSign } from '../../../../utils/formatter'
import { useContext } from 'react'
import { CartContext } from '../../../../Context/CartContext'
import { ItemsType } from '../../../../reducers/itemsCart/reducer'

interface CoffeeCardCartProps {
  item: ItemsType
}

export function CoffeeCardCart({ item }: CoffeeCardCartProps) {
  const { removeItem, changeQtd } = useContext(CartContext)

  function handleRemoveItemToCart(idCoffee: number) {
    removeItem(idCoffee)
  }

  function handleIncrease() {
    changeQtd(item.product.coffee.id, 'increase')
  }

  function handleDecrease() {
    if (item.qtd > 1) {
      changeQtd(item.product.coffee.id, 'decrease')
    }
  }
  return (
    <SelectedCoffee>
      <img src={item.product.coffee.image} alt="" />
      <div>
        <h3>{item.product.coffee.name}</h3>
        <div>
          {/* <input
                    type="number"
                    placeholder="1"
                    value={item.qtd}
                    onChange={(event) =>
                      handleChangeQtd(item.product.coffee.id, event)
                    }
                  /> */}
          <InputQuantity
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            quantity={item.qtd}
            size="small"
          />
          <button
            onClick={() => handleRemoveItemToCart(item.product.coffee.id)}
          >
            <Trash size={16} weight="light" />
            <span>Remover</span>
          </button>
        </div>
      </div>
      <span>{formatterPriceWithSign.format(item.product.coffee.price)}</span>
    </SelectedCoffee>
  )
}
