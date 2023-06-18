import { MapPinLine } from 'phosphor-react'
import { FieldsetsAddressContainer, TitleFieldset } from './styles'
import { useFormContext } from 'react-hook-form'
import { NewCheckoutFormData } from '../..'
import { MessageErroInput } from '../../styles'

export function FieldsetsAddress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewCheckoutFormData>()
  return (
    <FieldsetsAddressContainer>
      <TitleFieldset>
        <MapPinLine size={22} color="#C47F17" />
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleFieldset>

      <fieldset>
        <input type="text" placeholder="CEP" {...register('cep')} />
      </fieldset>
      {errors.cep && <MessageErroInput>{errors.cep.message}</MessageErroInput>}
      <fieldset>
        <input type="text" placeholder="Rua" {...register('street')} />
      </fieldset>
      {errors.street && (
        <MessageErroInput>{errors.street.message}</MessageErroInput>
      )}
      <fieldset>
        <input type="text" placeholder="Número" {...register('house_number')} />
        <input
          type="text"
          placeholder="Complemento (Opcional)"
          {...register('complement')}
        />
      </fieldset>
      {errors.house_number && (
        <MessageErroInput>{errors.house_number.message}</MessageErroInput>
      )}

      <fieldset>
        <input type="text" placeholder="Bairro" {...register('neighborhood')} />
        <input type="text" placeholder="Cidade" {...register('city')} />
        <input type="text" placeholder="UF" {...register('state_of_country')} />
      </fieldset>
      {errors.neighborhood && (
        <MessageErroInput>{errors.neighborhood.message}</MessageErroInput>
      )}
      {errors.city && (
        <MessageErroInput>{errors.city.message}</MessageErroInput>
      )}
      {errors.state_of_country && (
        <MessageErroInput>{errors.state_of_country.message}</MessageErroInput>
      )}
    </FieldsetsAddressContainer>
  )
}
