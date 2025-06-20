import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../interfaces/product.interface';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get('search')
  async search(@Query('term') term: string): Promise<Product[]> {
    return this.productsService.searchProducts(term);
  }

  @Get('filter')
  async filter(@Query('provider') provider: 'brazilian' | 'european'): Promise<Product[]> {
    return this.productsService.filterByProvider(provider);
  }
}
