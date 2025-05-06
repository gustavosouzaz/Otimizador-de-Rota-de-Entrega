import { PontoEntrega } from "../modelos/PontoEntrega";
import { calcularDistanciaEntrePontos } from "../utilitarios/CalculadoraDistancia";

// Função para otimizar a rota com o algoritmo do Vizinho Mais Próximo
export function otimizarRota(pontos: PontoEntrega[]): PontoEntrega[] {
  const pontosVisitados: PontoEntrega[] = [];
  let pontoAtual = pontos[0];  // Começa com o primeiro ponto
  pontosVisitados.push(pontoAtual);

  let pontosRestantes = [...pontos]; 
  pontosRestantes.shift(); 

  while (pontosRestantes.length > 0) {
    let pontoMaisProximo: PontoEntrega | null = null;
    let menorDistancia = Infinity;

    // Encontrar o ponto mais próximo
    for (let i = 0; i < pontosRestantes.length; i++) {
      const distancia = calcularDistanciaEntrePontos(pontoAtual, pontosRestantes[i]);
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        pontoMaisProximo = pontosRestantes[i];
      }
    }

    // Vai para o ponto mais próximo
    pontosVisitados.push(pontoMaisProximo!);
    pontoAtual = pontoMaisProximo!;
    
    // Remove o ponto da lista de pontos restantes
    pontosRestantes = pontosRestantes.filter(ponto => ponto !== pontoMaisProximo);
  }

  // Retorna ao ponto inicial
  pontosVisitados.push(pontosVisitados[0]);

  return pontosVisitados;
}
