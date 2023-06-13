import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCofeeDelivery from '../../assets/logo.svg'
import { Actions, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCofeeDelivery} alt="" />

      <Actions>
        <div>
          <MapPin size={22} weight="fill" />
          Itainópolis, PI
        </div>

        <NavLink to="/">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
