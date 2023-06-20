import { styled } from 'styled-components'

export const FieldsetPaymentContainer = styled.fieldset`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  margin-top: 0.75rem;
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

export const FieldsetPaymentInputs = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  & > fieldset > input {
    -webkit-appearance: none;
    box-shadow: 0 0 0 0;
  }

  & > fieldset > input:checked + label {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-200']};
    background: ${(props) => props.theme['purple-100']};
  }

  label {
    flex: 1;
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
    cursor: pointer;
    justify-content: center;
    align-items: center;

    span {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme['gray-700']};
    }
  }

  label:hover {
    background: ${(props) => props.theme['gray-500']};
    transition: background-color 0.2s;
  }
`
