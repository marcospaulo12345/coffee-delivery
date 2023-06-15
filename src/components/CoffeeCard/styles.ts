import styled from 'styled-components'

export const CoffeeCardContainer = styled.section`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 1.25rem;

  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;

  img {
    margin-top: -1.2rem;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
  }

  & > div {
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  span {
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-300']};
    background: ${(props) => props.theme['yellow-100']};
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
  }
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1.25rem 0;

  span {
    display: flex;
    font-size: 0.875rem;
    font-weight: 400;
    align-items: center;
    gap: 0.2rem;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  input {
    width: 72px;
    height: 38px;
    border: none;
    background: ${(props) => props.theme['gray-400']};
    border-radius: 6px;
  }

  button {
    background: ${(props) => props.theme['purple-300']};
    border: none;
    width: 2.375rem;
    height: 2.375rem;
    color: ${(props) => props.theme['gray-100']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`
