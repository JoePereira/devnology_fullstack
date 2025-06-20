import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { Product } from '../../interfaces/product.interface';

@Injectable()
export class BrazilianProviderService {
  private readonly API_URL =
    'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';

  async getProducts(): Promise<Product[]> {
    try {
      const response = await axios.get(this.API_URL);

      return response.data.map((item: any): Product => ({
        id: item.id,
        name: item.nome,
        description: item.descricao,
        price: Number(item.preco),
        image: item.imagem,
        provider: 'brazilian',
      }));
    } catch (error) {
      console.error('Erro ao buscar produtos do fornecedor brasileiro:', error);
      throw new InternalServerErrorException(
        'Erro ao buscar produtos do fornecedor brasileiro',
      );
    }
  }
}
