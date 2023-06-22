import { styled } from 'styled-components'

export const SelectedCoffeesContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;

  & > button[type='submit'] {
    width: 100%;
    max-width: 23rem;
    margin-left: auto;
    margin-right: auto;
    height: 2.875rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-200']};
    color: ${(props) => props.theme['gray-100']};
    cursor: pointer;
    text-transform: uppercase;
  }

  & > button[type='submit']:hover {
    background: ${(props) => props.theme['yellow-300']};
    transition: background-color 0.2s;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const ListSelectedCoffees = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SelectedCoffee = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  max-width: 23rem;

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

  div > button {
    border: none;
    background: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['purple-200']};
    display: flex;
    align-items: center;
    cursor: pointer;

    border-radius: 6px;
    padding: 0.5rem;

    & > span {
      color: ${(props) => props.theme['gray-700']};
      text-transform: uppercase;
      font-size: 0.75rem;
    }
  }
  div > button:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    div > h3 {
      text-align: center;
    }
  }
`

export const InfoPayment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 23rem;
  margin-left: auto;
  margin-right: auto;

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
