import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  background: ${(props) => props.theme['gray-100']};
  justify-content: space-between;
  align-items: center;
  padding: 2rem 8rem 2rem 8rem;
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
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-300']};
    display: flex;
    justify-content: center;
    border-radius: 6px;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
  }
`
