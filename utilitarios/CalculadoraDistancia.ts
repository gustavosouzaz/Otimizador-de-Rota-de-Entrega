import { PontoEntrega } from "../modelos/PontoEntrega";

// Função para calcular a distância entre dois pontos
export function calcularDistanciaEntrePontos(pontoA: PontoEntrega, pontoB: PontoEntrega): number {
  const dx = pontoA.x - pontoB.x;
  const dy = pontoA.y - pontoB.y;
  return Math.sqrt(dx * dx + dy * dy);
}
