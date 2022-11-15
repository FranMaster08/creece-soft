import { Test, TestingModule } from '@nestjs/testing';
import { ConsultorController } from './consultor.controller';
import { ConsultorService } from './consultor.service';

describe('ConsultorController', () => {
  let controller: ConsultorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultorController],
      providers: [ConsultorService],
    }).compile();

    controller = module.get<ConsultorController>(ConsultorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
