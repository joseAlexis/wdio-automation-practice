import { HttpClient } from './init';

class ProductAPI extends HttpClient {
  constructor() {
    super();
  }

  async getProductList() {
    return await this.instance.get('/api/productsList');
  }
}

export default new ProductAPI();
