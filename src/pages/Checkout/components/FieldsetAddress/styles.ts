import { styled } from 'styled-components'

export const FieldsetsAddressContainer = styled.fieldset`
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
      width: 100%;
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

  fieldset:nth-child(2) {
    & > input {
      width: 40%;
    }
  }

  fieldset:nth-child(4) {
    input:first-child {
      width: 70%;
    }
  }

  fieldset:nth-child(5) {
    input:last-child {
      width: 30%;
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
