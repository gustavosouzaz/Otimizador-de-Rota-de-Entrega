import {
  calcularDistanciaEntrePontos,
  calcularRotaOtimizada,
} from './calculadora-distancia';

describe('Funções de cálculo de rota', () => {
  const pontos = [
    { _id: '1', x: 0, y: 0 },
    { _id: '2', x: 3, y: 4 }, // distância 5
    { _id: '3', x: 6, y: 8 }, // distância 5
  ];

  test('calcularDistanciaEntrePontos deve retornar a distância correta', () => {
    const distancia = calcularDistanciaEntrePontos(pontos[0], pontos[1]);
    expect(distancia).toBeCloseTo(5);
  });

  test('calcularRotaOtimizada deve retornar ordem e distância', () => {
    const resultado = calcularRotaOtimizada(pontos);
    expect(resultado).toHaveProperty('ordem');
    expect(resultado).toHaveProperty('distanciaTotal');
    expect(resultado.ordem.length).toBe(pontos.length);
    expect(typeof resultado.distanciaTotal).toBe('number');
  });

  test('calcularRotaOtimizada com lista vazia deve retornar valores padrão', () => {
    const resultado = calcularRotaOtimizada([]);
    expect(resultado.ordem).toEqual([]);
    expect(resultado.distanciaTotal).toBe(0);
  });
});
