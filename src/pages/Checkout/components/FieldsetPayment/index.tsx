import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  FieldsetPaymentContainer,
  FieldsetPaymentInputs,
  TitleFieldset,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { NewCheckoutFormData } from '../..'
import { MessageErroInput } from '../../styles'

export function FieldsetPayment() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewCheckoutFormData>()
  return (
    <FieldsetPaymentContainer>
      <TitleFieldset>
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleFieldset>

      <FieldsetPaymentInputs>
        <fieldset>
          <input
            type="radio"
            id="creditCard"
            value="creditCard"
            {...register('payment')}
          />
          <label htmlFor="creditCard">
            <CreditCard size={16} weight="light" />
            <span>Cartão de crédito</span>
          </label>
        </fieldset>

        <fieldset>
          <input
            type="radio"
            id="debitCard"
            value="debitCard"
            {...register('payment')}
          />
          <label htmlFor="debitCard">
            <Bank size={16} weight="light" />
            <span>Cartão de débito</span>
          </label>
        </fieldset>

        <fieldset>
          <input
            type="radio"
            id="money"
            value="money"
            {...register('payment')}
          />
          <label htmlFor="money">
            <Money size={16} weight="light" />
            <span>Dinheiro</span>
          </label>
        </fieldset>
      </FieldsetPaymentInputs>
      {errors.payment && (
        <MessageErroInput>{errors.payment.message}</MessageErroInput>
      )}
    </FieldsetPaymentContainer>
  )
}
