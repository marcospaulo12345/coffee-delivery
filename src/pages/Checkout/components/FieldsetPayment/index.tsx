import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FieldsetPaymentContainer, TitleFieldset } from './styles'
import { useFormContext } from 'react-hook-form'
import { NewCheckoutFormData } from '../..'

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

        <input type="radio" id="money" value="money" {...register('payment')} />
        <label htmlFor="money">
          <Money size={16} weight="light" />
          <span>Dinheiro</span>
        </label>
      </fieldset>
      {errors.payment && <span>{errors.payment.message}</span>}
    </FieldsetPaymentContainer>
  )
}
