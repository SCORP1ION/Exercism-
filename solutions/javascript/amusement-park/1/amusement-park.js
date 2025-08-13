// Task one
export function createVisitor(name, age, ticketId){
  // retorna un nuevo visitante en un objeto con su misma clave y su variable
  return {
    name: name,
    age: age,
    ticketId: ticketId
  };
}
// Task two
export function revokeTicket(visitor){
  // acceder al objeto y cambiar su estado de ticketId a null para
  // visitas futuras 
  visitor.ticketId = null
  return visitor
}

// Task three
export function ticketStatus(tickets, ticketId){
  // ciclo que accede a al objeto
  for(let key in tickets){
    // deternima el estado del billete si ya fue vendido 
    if(key === ticketId && tickets[key] != null) return `sold to ${tickets[key]}`
    // deternima el estado del billete si sigue siendo null (en caso de que no se alla vendido)
    if(key === ticketId && tickets[key] === null) return `not sold` 
  }
  // en caso de que el billete no exista
  return `unknown ticket id`
}

// task four
export function simpleTicketStatus(tickets, ticketId){
  for(let key in tickets){
    // version mas simple como en la task three para determinar si existe o no
    if(key === ticketId && tickets[key] != null) return`${tickets[key]}`
  }
  return `invalid ticket !!!`
}

// Task five
export function gtcVersion(VisitorGTC) {
  // devuelve la version de los terminos y condiciones es nueva al visitante, en caso contrario devovera un undefined
  return VisitorGTC.gtc?.version;
}


