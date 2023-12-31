import styled from 'styled-components'

import backgroundHome from '../../assets/backgroundHome.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const HomeIntro = styled.div`
  background-image: url(${backgroundHome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  height: 44rem;

  @media (max-width: 768px) {
    height: 100%;
  }
`

export const HomeIntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0rem;

  @media (max-width: 768px) {
    margin-top: 6.5rem;
    flex-direction: column-reverse;
  }
`

export const HomeIntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h1 {
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

  @media (max-width: 768px) {
    & > h1 {
      font-size: 2rem;
    }
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

export const HomeIntroRight = styled.div`
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`

export const CoffeeList = styled.div`
  & > h1 {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }

  & > div {
    margin-top: 3.375rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 0 2rem 0 2rem;
  }
`
