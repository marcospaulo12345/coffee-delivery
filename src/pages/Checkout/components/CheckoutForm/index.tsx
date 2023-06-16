import { useContext } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import {
  CheckoutFormContainer,
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

import { CartContext } from '../../../../Context/CartContext'

export function CheckoutForm() {
  const { items, removeItem } = useContext(CartContext)

  function handleRemoveItemToCart(idCoffee: number) {
    removeItem(idCoffee)
  }

  return (
    <CheckoutFormContainer action="">
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
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
            {items.map((item) => {
              return (
                <SelectedCoffee key={item.product.coffee.id}>
                  <img src={item.product.coffee.image} alt="" />
                  <div>
                    <h3>{item.product.coffee.name}</h3>
                    <div>
                      <input type="number" placeholder="1" value={item.qtd} />
                      <button
                        onClick={() =>
                          handleRemoveItemToCart(item.product.coffee.id)
                        }
                      >
                        <Trash size={16} weight="light" />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>
                  <span>{item.product.coffee.price}</span>
                </SelectedCoffee>
              )
            })}
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
    </CheckoutFormContainer>
  )
}
