import { MapPinLine } from 'phosphor-react'
import { FieldsetsAddressContainer, TitleFieldset } from './styles'
import { useFormContext } from 'react-hook-form'
import { NewCheckoutFormData } from '../..'

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
      {errors.cep && <span>{errors.cep.message}</span>}
      <fieldset>
        <input type="text" placeholder="Rua" {...register('street')} />
      </fieldset>
      {errors.street && <span>{errors.street.message}</span>}
      <fieldset>
        <input type="text" placeholder="Número" {...register('house_number')} />
        <input
          type="text"
          placeholder="Complemento (Opcional)"
          {...register('complement')}
        />
      </fieldset>
      {errors.house_number && <span>{errors.house_number.message}</span>}

      <fieldset>
        <input type="text" placeholder="Bairro" {...register('neighborhood')} />
        <input type="text" placeholder="Cidade" {...register('city')} />
        <input type="text" placeholder="UF" {...register('state_of_country')} />
      </fieldset>
      {errors.neighborhood && <span>{errors.neighborhood.message}</span>}
      {errors.city && <span>{errors.city.message}</span>}
      {errors.state_of_country && (
        <span>{errors.state_of_country.message}</span>
      )}
    </FieldsetsAddressContainer>
  )
}
