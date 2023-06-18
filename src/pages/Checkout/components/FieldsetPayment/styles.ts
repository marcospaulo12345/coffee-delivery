import { styled } from 'styled-components'

export const FieldsetPaymentContainer = styled.fieldset`
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
