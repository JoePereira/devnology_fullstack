import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { BrazilianProviderService } from './services/brazilian-provider/brazilian-provider.service';
import { EuropeanProviderService } from './services/european-provider/european-provider.service';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    BrazilianProviderService,
    EuropeanProviderService,
  ],
})
export class ProductsModule {}
