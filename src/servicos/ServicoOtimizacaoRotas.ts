import { calcularDistanciaEntrePontos } from "../../utilitarios/CalculadoraDistancia";

export function otimizarRota(pontos: { id: string | number, x: number, y: number }[]) {
  let ordem: (string | number)[] = [];
  let visitados: { id: string | number, x: number, y: number }[] = [];
  let atual = pontos[0];
  let distanciaTotal = 0;

  ordem.push(atual.id);
  visitados.push(atual);

  while (visitados.length < pontos.length) {
    let proximos = pontos.filter(p => !visitados.includes(p));
    let maisPerto = proximos[0];
    let menor = calcularDistanciaEntrePontos(atual, maisPerto);

    for (let p of proximos) {
      let d = calcularDistanciaEntrePontos(atual, p);
      if (d < menor) {
        menor = d;
        maisPerto = p;
      }
    }

    distanciaTotal += menor;
    atual = maisPerto;
    ordem.push(atual.id);
    visitados.push(atual);
  }

  distanciaTotal += calcularDistanciaEntrePontos(atual, pontos[0]);

  return { ordem, distanciaTotal };
}
