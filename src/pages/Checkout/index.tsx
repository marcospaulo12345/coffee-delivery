import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutFormLeft,
  CheckoutFormRight,
  FieldsetPayment,
  FieldsetsAddress,
  InfoPayment,
  ListSelectedCoffees,
  SelectedCoffee,
  SelectedCoffeesContainer,
  TitleFieldset,
} from './styles'

import imageCoffee from '../../assets/coffee.svg'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutForm action="">
        <CheckoutFormLeft>
          <h1>Complete seu pedido</h1>
          <FieldsetsAddress>
            <TitleFieldset>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </TitleFieldset>

            <fieldset>
              <input type="text" placeholder="CEP" />
            </fieldset>
            <fieldset>
              <input type="text" placeholder="Rua" />
            </fieldset>
            <fieldset>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </fieldset>
            <fieldset>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </fieldset>
          </FieldsetsAddress>

          <FieldsetPayment>
            <TitleFieldset>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </TitleFieldset>

            <fieldset>
              <input type="radio" id="creditCard" />
              <label htmlFor="creditCard">
                <CreditCard size={16} weight="light" />
                <span>Cartão de crédito</span>
              </label>

              <input type="radio" id="debitCard" />
              <label htmlFor="debitCard">
                <Bank size={16} weight="light" />
                <span>Cartão de débito</span>
              </label>

              <input type="radio" id="money" />
              <label htmlFor="money">
                <Money size={16} weight="light" />
                <span>Dinheiro</span>
              </label>
            </fieldset>
          </FieldsetPayment>
        </CheckoutFormLeft>

        <CheckoutFormRight>
          <h1>Cafés selecionados</h1>
          <SelectedCoffeesContainer>
            <ListSelectedCoffees>
              <SelectedCoffee>
                <img src={imageCoffee} alt="" />
                <div>
                  <h3>Expresso Tradicional</h3>
                  <div>
                    <input type="number" placeholder="1" />
                    <button>
                      <Trash size={16} weight="light" />
                      <span>Remover</span>
                    </button>
                  </div>
                </div>
                <span>R$ 9,90</span>
              </SelectedCoffee>

              <SelectedCoffee>
                <img src={imageCoffee} alt="" />
                <div>
                  <h3>Expresso Tradicional</h3>
                  <div>
                    <input type="number" placeholder="1" />
                    <button>
                      <Trash size={16} weight="light" />
                      <span>Remover</span>
                    </button>
                  </div>
                </div>
                <span>R$ 9,90</span>
              </SelectedCoffee>
            </ListSelectedCoffees>

            <InfoPayment>
              <ul>
                <li>Total de items</li>
                <li>Entrega</li>
                <li>Total</li>
              </ul>

              <ul>
                <li>R$ 29,70</li>
                <li>R$ 3,50</li>
                <li>R$ 33,20</li>
              </ul>
            </InfoPayment>
            <button>confirmar pedido</button>
          </SelectedCoffeesContainer>
        </CheckoutFormRight>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
