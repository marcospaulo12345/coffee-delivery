import { MapPinLine } from 'phosphor-react'
import { FieldsetsAddressContainer, TitleFieldset } from './styles'
import { useFormContext } from 'react-hook-form'

export function FieldsetsAddress() {
  const { register } = useFormContext()
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
      <fieldset>
        <input type="text" placeholder="Rua" {...register('street')} />
      </fieldset>
      <fieldset>
        <input type="text" placeholder="Número" {...register('house_number')} />
        <input
          type="text"
          placeholder="Complemento"
          {...register('complement')}
        />
      </fieldset>
      <fieldset>
        <input type="text" placeholder="Bairro" {...register('neighborhood')} />
        <input type="text" placeholder="Cidade" {...register('city')} />
        <input type="text" placeholder="UF" {...register('state_of_country')} />
      </fieldset>
    </FieldsetsAddressContainer>
  )
}
