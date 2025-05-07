// Função para calcular a distância entre dois pontos
export function calcularDistanciaEntrePontos(pontoA: { x: number, y: number }, pontoB: { x: number, y: number }): number {
  const dx = pontoA.x - pontoB.x;
  const dy = pontoA.y - pontoB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

