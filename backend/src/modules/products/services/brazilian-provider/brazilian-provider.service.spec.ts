import { Test, TestingModule } from '@nestjs/testing';
import { BrazilianProviderService } from './brazilian-provider.service';

describe('BrazilianProviderService', () => {
  let service: BrazilianProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrazilianProviderService],
    }).compile();

    service = module.get<BrazilianProviderService>(BrazilianProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
