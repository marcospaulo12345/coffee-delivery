import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  /* padding-top: 6.5rem; */
  padding: 9rem 8rem 2rem 8rem;
`

export const CheckoutFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
`

export const CheckoutFormLeft = styled.fieldset`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const CheckoutFormRight = styled.fieldset`
  width: 26rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const MessageErroInput = styled.span`
  font-size: 0.9rem;
  color: #d70612;
`

export const EmptyItems = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-300']};
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`
