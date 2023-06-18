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
  cep: zod.string(),
  street: zod.string(),
  house_number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state_of_country: zod.string(),
})

type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>

export function Checkout() {
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  })

  const { handleSubmit } = newCheckoutForm

  function handlePlaceOrder(data: any) {
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
