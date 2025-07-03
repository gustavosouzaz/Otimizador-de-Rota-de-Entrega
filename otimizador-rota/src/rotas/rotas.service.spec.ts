import { Test, TestingModule } from '@nestjs/testing';
import { RotasService } from './rotas.service';
import { getModelToken } from '@nestjs/mongoose';
import { Ponto } from '../pontos/ponto.schema';
import { Rota } from './schemas/rota.schema';
import { HistoricoRota } from '../historico/schemas/historico-rota.schema';

describe('RotasService', () => {
  let service: RotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RotasService,
        {
          provide: getModelToken(Ponto.name),
          useValue: { find: jest.fn() },
        },
        {
          provide: getModelToken(Rota.name),
          useValue: { findByIdAndDelete: jest.fn(), save: jest.fn() },
        },
        {
          provide: getModelToken(HistoricoRota.name),
          useValue: { create: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<RotasService>(RotasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
