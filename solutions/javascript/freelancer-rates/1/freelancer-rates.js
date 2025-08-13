// Calcula lo que haga por su jornada de trabajo de 8 hrs del freelancer
export function dayRate(ratePerHour) { 
  return ratePerHour * 8;
}

// El presupuesto entre la jornada que gana por hora
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = dayRate(ratePerHour);
  // Calcular los dias de descuento de los 22 dias
  const fullMoths = Math.floor(numDays / 22);
  const discountDays = fullMoths * 22;
  const remainingDays = numDays - discountDays;
  // Dias sin descuento
  const discoutedPrice = discountDays * dailyRate * (1 - discount)
  const regularDays = remainingDays * dailyRate
  // Total 
  return Math.ceil(discoutedPrice + regularDays)
}

