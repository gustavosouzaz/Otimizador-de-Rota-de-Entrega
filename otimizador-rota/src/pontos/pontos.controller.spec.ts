import { Test, TestingModule } from '@nestjs/testing';
import { PontosController } from './pontos.controller';
import { PontosService } from './pontos.service';

describe('PontosController', () => {
  let controller: PontosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PontosController],
      providers: [
        {
          provide: PontosService,
          useValue: {
            criar: jest.fn(), // mock dos métodos utilizados
          },
        },
      ],
    }).compile();

    controller = module.get<PontosController>(PontosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
