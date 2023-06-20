import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCofeeDelivery from '../../assets/logo.svg'
import { Actions, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export function Header() {
  const { items } = useContext(CartContext)

  const countItem = items.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCofeeDelivery} alt="" />
      </NavLink>

      <Actions>
        <div>
          <MapPin size={22} weight="fill" />
          Itainópolis, PI
        </div>

        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {countItem > 0 ? <span>{countItem}</span> : null}
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
