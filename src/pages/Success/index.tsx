import {
  CardContainer,
  IconContainer,
  OrderInformation,
  OrderInformationCard,
  SuccessContainer,
  SuccessContent,
} from './styles'

import ImageIllustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SuccessContent>
        <OrderInformation>
          <OrderInformationCard>
            <IconContainer backgroundIcon="purple">
              <MapPin size={16} weight="fill" />
            </IconContainer>
            <CardContainer>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </CardContainer>
          </OrderInformationCard>

          <OrderInformationCard>
            <IconContainer backgroundIcon="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <CardContainer>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </CardContainer>
          </OrderInformationCard>

          <OrderInformationCard>
            <IconContainer backgroundIcon="yellow_dark">
              <CurrencyDollar size={16} weight="regular" />
            </IconContainer>
            <CardContainer>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </CardContainer>
          </OrderInformationCard>
        </OrderInformation>
        <img src={ImageIllustration} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
