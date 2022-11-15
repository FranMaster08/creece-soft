import { Test, TestingModule } from '@nestjs/testing';
import { ConsultorService } from './consultor.service';

describe('ConsultorService', () => {
  let service: ConsultorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultorService],
    }).compile();

    service = module.get<ConsultorService>(ConsultorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
