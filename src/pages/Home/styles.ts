import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 10rem;
`

export const HomeIntro = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const HomeIntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.3;
  }
`

export const IntroItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3.125rem;
`

export const Item = styled.div`
  color: ${(props) => props.theme['gray-700']};
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    color: ${(props) => props.theme['gray-100']};
    border-radius: 999px;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:nth-child(1) span {
    background: ${(props) => props.theme['yellow-300']};
  }
  &:nth-child(2) span {
    background: ${(props) => props.theme['gray-700']};
  }
  &:nth-child(3) span {
    background: ${(props) => props.theme['yellow-200']};
  }
  &:nth-child(4) span {
    background: ${(props) => props.theme['purple-200']};
  }
`

export const HomeIntroRight = styled.div``
