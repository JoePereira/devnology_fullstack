import { Test, TestingModule } from '@nestjs/testing';
import { EuropeanProviderService } from './european-provider.service';

describe('EuropeanProviderService', () => {
  let service: EuropeanProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EuropeanProviderService],
    }).compile();

    service = module.get<EuropeanProviderService>(EuropeanProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
