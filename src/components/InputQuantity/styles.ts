import { css, styled } from 'styled-components'

interface InputQuantityContainerProps {
  size: 'small' | 'medium'
}

export const InputQuantityContainer = styled.div<InputQuantityContainerProps>`
  width: 4.5rem;
  height: ${(props) => (props.size === 'medium' ? '2.375rem' : '2rem')};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.2rem 0.3rem;
    `}

  background: ${(props) => props.theme['gray-400']};

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    width: 1.25rem;
    height: 1.25rem;
    border: none;
    background: transparent;
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-900']};
    -moz-appearance: textfield;
  }

  svg {
    color: ${(props) => props.theme['purple-200']};
    cursor: pointer;
  }
  svg:hover {
    color: ${(props) => props.theme['purple-300']};
  }
`
