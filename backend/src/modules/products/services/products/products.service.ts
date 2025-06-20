import { Injectable } from '@nestjs/common';
import { BrazilianProviderService } from '../brazilian-provider/brazilian-provider.service';
import { EuropeanProviderService } from '../european-provider/european-provider.service';
import { Product } from '../../interfaces/product.interface';


@Injectable()
export class ProductsService {
  constructor(
    private readonly brazilianProviderService: BrazilianProviderService,
    private readonly europeanProviderService: EuropeanProviderService,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    const [brazilianProducts, europeanProducts] = await Promise.all([
      this.brazilianProviderService.getProducts(),
      this.europeanProviderService.getProducts(),
    ]);

    // Junta os dois arrays
    return [...brazilianProducts, ...europeanProducts];
  }

  async searchProducts(term: string): Promise<Product[]> {
    const allProducts = await this.getAllProducts();

    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()),
    );
  }

  async filterByProvider(provider: 'brazilian' | 'european'): Promise<Product[]> {
    const allProducts = await this.getAllProducts();

    return allProducts.filter((product) => product.provider === provider);
  }
}
