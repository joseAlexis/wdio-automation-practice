import ProductsPage from '../pages/products.page.ts';
import ProductDetailsPage from '../pages/productDetails.page.ts';

import ProductAPI from '../api/product.api.ts';
import { Product } from '../types/product.ts';

describe('Products Test Suite', () => {
  before(async function () {
    await ProductsPage.open();
    this.products = await ProductAPI.getList();
  });

  /**
   * TODO
   * [ ] new ProductDetailsPage() when user click on producr card UI
   * [ ] Fix product.category on type and add assertion
   * [ ] Fix Brand locator and add assertion
   */
  it('Should Verify Product details page', async function () {
    const product: Product = this.products[0];

    await expect(ProductsPage.title).toBeDisplayed();

    const productDetailsPage = new ProductDetailsPage(product.id);
    await productDetailsPage.open();
    await expect(productDetailsPage.name).toHaveText(product.name);
    await expect(productDetailsPage.price).toHaveText(product.price);
  });
});
