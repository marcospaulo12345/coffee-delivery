export const formatterPrice = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
})

export const formatterPriceWithSign = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
