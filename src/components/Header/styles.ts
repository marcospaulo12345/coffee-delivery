import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  background: ${(props) => props.theme['gray-100']};
  justify-content: space-between;
  align-items: center;
  padding: 2rem 8rem 2rem 8rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    color: ${(props) => props.theme['purple-200']};
    background: ${(props) => props.theme['purple-100']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    height: 2.375rem;
    padding: 0 0.5rem;
  }

  a {
    position: relative;
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-300']};
    display: flex;
    justify-content: center;
    border-radius: 6px;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;

    span {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;

      width: 1.25rem;
      height: 1.25rem;
      background: ${(props) => props.theme['yellow-300']};
      border-radius: 999px;
      color: ${(props) => props.theme.white};
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`
