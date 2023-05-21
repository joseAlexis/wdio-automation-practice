import { Product } from '../types/product';
import { HttpClient } from './init.ts';

class ProductAPI extends HttpClient {
  constructor() {
    super();
  }

  async getList(): Promise<Product[]> {
    const response = await this.instance.get('/api/productsList');
    return response.data.products;
  }
}

export default new ProductAPI();
