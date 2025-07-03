import { Test, TestingModule } from '@nestjs/testing';
import { PontosService } from './pontos.service';
import { getModelToken } from '@nestjs/mongoose';
import { Ponto } from './ponto.schema';

describe('PontosService', () => {
  let service: PontosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PontosService,
        {
          provide: getModelToken(Ponto.name),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            // Adicione mais mocks se necessário para métodos usados no service
          },
        },
      ],
    }).compile();

    service = module.get<PontosService>(PontosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
