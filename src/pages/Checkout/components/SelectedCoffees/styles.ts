import { styled } from 'styled-components'

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
    cursor: pointer;
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
