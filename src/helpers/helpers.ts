export function generateId() {
  const timestamp = Date.now().toString(36);
  const randomValue = Math.random().toString(36).substring(2, 5); // Genera un valor aleatorio y toma solo algunos caracteres

  return timestamp + randomValue;
}
