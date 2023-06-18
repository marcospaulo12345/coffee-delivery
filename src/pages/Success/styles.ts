import { styled } from 'styled-components'

export const SuccessContainer = styled.main`
  padding: 9rem 8rem 2rem 8rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-300']};
    font-weight: bold;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OrderInformation = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  max-width: 32.875rem;

  border: 1px solid transparent;
  background: linear-gradient(
      to right,
      ${(props) => props.theme['gray-100']},
      ${(props) => props.theme['gray-100']}
    ),
    linear-gradient(to right, #8047f8, #dbac2c);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  border-radius: 6px 36px;
`

export const OrderInformationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICON_BACKGROUND = {
  purple: 'purple-200',
  yellow: 'yellow-200',
  yellow_dark: 'yellow-300',
} as const

interface IconContainerProps {
  variant: keyof typeof ICON_BACKGROUND
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  border-radius: 999px;
  color: ${(props) => props.theme.white};

  background: ${(props) => props.theme[ICON_BACKGROUND[props.variant]]};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`
