import { Test, TestingModule } from '@nestjs/testing';
import { HistoricoController } from './historico.controller';
import { getModelToken } from '@nestjs/mongoose';
import { HistoricoRota } from './schemas/historico-rota.schema';

describe('HistoricoController', () => {
  let controller: HistoricoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoricoController],
      providers: [
        {
          provide: getModelToken(HistoricoRota.name),
          useValue: { find: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<HistoricoController>(HistoricoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
