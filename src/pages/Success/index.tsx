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
import { useLocation, useNavigate } from 'react-router-dom'
import { NewCheckoutFormData } from '../Checkout'
import { useEffect } from 'react'

interface LocationType {
  state: NewCheckoutFormData
}

export function Success() {
  const { state } = useLocation() as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  const typeOfPayment = {
    creditCard: 'Cartão de crédito',
    debitCard: 'Cartão de débito',
    money: 'Dinheiro',
  } as const

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SuccessContent>
        <OrderInformation>
          <OrderInformationCard>
            <IconContainer variant="purple">
              <MapPin size={16} weight="fill" />
            </IconContainer>
            <CardContainer>
              <span>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.house_number}
                </strong>
              </span>
              <span>
                {state.neighborhood} - {state.city}, {state.state_of_country}
              </span>
            </CardContainer>
          </OrderInformationCard>

          <OrderInformationCard>
            <IconContainer variant="yellow">
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
            <IconContainer variant="yellow_dark">
              <CurrencyDollar size={16} weight="regular" />
            </IconContainer>
            <CardContainer>
              <span>Pagamento na entrega</span>
              <span>
                <strong>{typeOfPayment[state.payment]}</strong>
              </span>
            </CardContainer>
          </OrderInformationCard>
        </OrderInformation>
        <img src={ImageIllustration} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
