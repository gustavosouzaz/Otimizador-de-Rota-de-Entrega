export interface Ponto {
  _id: string;
  x: number;
  y: number;
}

export function calcularDistanciaEntrePontos(
  pontoA: Ponto,
  pontoB: Ponto,
): number {
  const dx = pontoA.x - pontoB.x;
  const dy = pontoA.y - pontoB.y;
  return Math.sqrt(dx * dx + dy * dy);
}

export function calcularRotaOtimizada(pontos: Ponto[]): {
  ordem: Ponto[];
  distanciaTotal: number;
} {
  if (pontos.length === 0) {
    return { ordem: [], distanciaTotal: 0 };
  }

  const visitados = new Set<string>();
  const rota: Ponto[] = [];
  let atual = pontos[0];
  rota.push(atual);
  visitados.add(atual._id);

  let distanciaTotal = 0;

  while (rota.length < pontos.length) {
    let menorDist = Infinity;
    let proximo: Ponto | null = null;

    for (const ponto of pontos) {
      const idStr = ponto._id;
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
      visitados.add(proximo._id);
      atual = proximo;
    }
  }

  return {
    ordem: rota,
    distanciaTotal: parseFloat(distanciaTotal.toFixed(2)),
  };
}
