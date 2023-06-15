import { styled } from 'styled-components'

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

export const FieldsetsAddress = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  & > fieldset {
    display: flex;
    gap: 1rem;
    input {
      height: 2.625rem;
      border: 1px solid ${(props) => props.theme['gray-400']};
      border-radius: 4px;
      background: ${(props) => props.theme['gray-300']};

      color: ${(props) => props.theme['gray-600']};
      font-size: 0.875rem;
      line-height: 1.3;
      padding: 0.5rem;
    }
  }
`

export const FieldsetPayment = styled.fieldset`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  padding: 2.5rem;

  & > fieldset {
    display: flex;

    & > input {
      -webkit-appearance: none;
    }

    & > input:checked + label {
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-200']};
      background: ${(props) => props.theme['purple-100']};
    }

    label {
      height: 3.1875rem;
      margin: auto;
      border-radius: 6px;
      position: relative;
      display: flex;
      align-items: center;
      color: ${(props) => props.theme['purple-200']};
      background: ${(props) => props.theme['gray-400']};
      gap: 0.2rem;
      padding: 1rem;

      span {
        font-size: 0.75rem;
        text-transform: uppercase;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
`

export const TitleFieldset = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-bottom: 1rem;

  div > h2 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-800']};
  }

  div > p {
    font-size: 0.875rem;
    font-weight: 400;
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

export const SelectedCoffeesContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;

  & > button {
    height: 2.875rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-200']};
    color: ${(props) => props.theme['gray-100']};
    text-transform: uppercase;
  }
`

export const ListSelectedCoffees = styled.fieldset`
  display: flex;
  flex-direction: column;
`
export const SelectedCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  & > span {
    font-size: 1rem;
    font-weight: bold;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  div > h3 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }

  div > div {
    display: flex;
    gap: 0.5rem;
  }

  div > input {
    width: 72px;
    height: 32px;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-400']};
    padding: 0.5rem;
  }

  div > button {
    border: none;
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['purple-200']};
    display: flex;
    align-items: center;

    border-radius: 6px;
    padding: 0.5rem;

    & > span {
      color: ${(props) => props.theme['gray-700']};
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
`

export const InfoPayment = styled.div`
  display: flex;
  justify-content: space-between;

  ul:last-child {
    text-align: end;
  }

  li {
    list-style-type: none;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-bottom: 0.4rem;
  }

  li:last-child {
    font-size: 1.25rem;
    font-weight: bold;
  }
`
