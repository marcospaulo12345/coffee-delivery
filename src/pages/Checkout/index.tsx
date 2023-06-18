import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutFormLeft,
  CheckoutFormRight,
} from './styles'
import { FieldsetsAddress } from './components/FieldsetAddress'
import { FieldsetPayment } from './components/FieldsetPayment'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as zod from 'zod'

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
  payment: zod.string().min(1, 'Selecione a forma de pagamento!'),
})

export type NewCheckoutFormData = zod.infer<
  typeof newCheckoutFormValidationSchema
>

export function Checkout() {
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
      payment: '',
    },
  })

  const { handleSubmit } = newCheckoutForm

  function handlePlaceOrder(data: NewCheckoutFormData) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
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
    </CheckoutContainer>
  )
}
