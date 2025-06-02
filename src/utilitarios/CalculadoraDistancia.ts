// Função para calcular a distância entre dois pontos
export function calcularDistanciaEntrePontos(pontoA: { x: number, y: number }, pontoB: { x: number, y: number }): number {
  const dx = pontoA.x - pontoB.x;
  const dy = pontoA.y - pontoB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function calcularRotaOtimizada(pontos: any[]) {
  if (pontos.length === 0) return { ordem: [], distanciaTotal: 0 };

  const visitados = new Set();
  const rota = [];
  let atual = pontos[0];
  rota.push(atual);
  visitados.add(atual._id.toString());

  let distanciaTotal = 0;

  while (rota.length < pontos.length) {
    let menorDist = Infinity;
    let proximo = null;

    for (const ponto of pontos) {
      const idStr = ponto._id.toString();
      if (visitados.has(idStr)) continue;

      const dist = calcularDistanciaEntrePontos(atual, ponto);
      if (dist < menorDist) {
        menorDist = dist;
        proximo = ponto;
      }
    }

    if (proximo) {
      rota.push(proximo);
      distanciaTotal += menorDist;
      visitados.add(proximo._id.toString());
      atual = proximo;
    }
  }

  return {
    ordem: rota,
    distanciaTotal: parseFloat(distanciaTotal.toFixed(2)),
  };
}
