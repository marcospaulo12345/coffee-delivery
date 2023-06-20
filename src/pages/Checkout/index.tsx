import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutFormLeft,
  CheckoutFormRight,
  EmptyItems,
} from './styles'
import { FieldsetsAddress } from './components/FieldsetAddress'
import { FieldsetPayment } from './components/FieldsetPayment'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as zod from 'zod'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Esse campo é obrigatório!'),
  street: zod.string().min(1, 'Esse campo é obrigatório!'),
  house_number: zod
    .string()
    .refine((value) => value === 's/n' || /^\d+$/.test(value), {
      message: 'O número da casa deve ser um número ou "s/n".',
    }),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro!'),
  city: zod.string().min(1, 'Informe a cidade!'),
  state_of_country: zod
    .string()
    .min(2, 'Informe a sigla do estado!')
    .max(2, 'Informe apenas as duas letras referente ao estado'),
  payment: zod.enum(['creditCard', 'debitCard', 'money'], {
    errorMap: (issue, ctx) => ({ message: 'Selecione a forma de pagamento' }),
  }),
})

export type NewCheckoutFormData = zod.infer<
  typeof newCheckoutFormValidationSchema
>

export function Checkout() {
  const { items, confirmOrder } = useContext(CartContext)
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      house_number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state_of_country: '',
    },
  })

  const { handleSubmit } = newCheckoutForm

  const navigate = useNavigate()

  function handlePlaceOrder(orderData: NewCheckoutFormData) {
    confirmOrder(orderData)

    navigate('/success', {
      state: orderData,
    })
  }

  return (
    <CheckoutContainer>
      {items.length !== 0 ? (
        <CheckoutFormContainer onSubmit={handleSubmit(handlePlaceOrder)}>
          <FormProvider {...newCheckoutForm}>
            <CheckoutFormLeft>
              <h1>Complete seu pedido</h1>
              <FieldsetsAddress />

              <FieldsetPayment />
            </CheckoutFormLeft>

            <CheckoutFormRight>
              <h1>Cafés selecionados</h1>

              <SelectedCoffees />
            </CheckoutFormRight>
          </FormProvider>
        </CheckoutFormContainer>
      ) : (
        <EmptyItems>
          <h1>☹ Carrinho de compras vazio!</h1>
          <p>
            Lembre-se: cada café adicionado é uma oportunidade de experimentar
            algo novo e delicioso. Vamos começar? Adicione um café ao seu
            carrinho agora mesmo!
          </p>
        </EmptyItems>
      )}
    </CheckoutContainer>
  )
}
