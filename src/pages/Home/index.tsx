import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import imageHome from '../../assets/ImagemHome.svg'
import {
  CoffeeList,
  HomeContainer,
  HomeIntro,
  HomeIntroLeft,
  HomeIntroRight,
  IntroItems,
  Item,
} from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'

import { coffees } from '../../utils/listCoffees'

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro>
        <HomeIntroLeft>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <IntroItems>
            <Item>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </Item>
            <Item>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </Item>
            <Item>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </Item>
            <Item>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você!
            </Item>
          </IntroItems>
        </HomeIntroLeft>

        <HomeIntroRight>
          <img src={imageHome} alt="" />
        </HomeIntroRight>
      </HomeIntro>

      <CoffeeList>
        <h1>Nossos cafés</h1>

        <div>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </div>
      </CoffeeList>
    </HomeContainer>
  )
}
