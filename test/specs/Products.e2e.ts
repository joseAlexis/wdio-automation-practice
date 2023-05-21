import ProductsPage from '../pages/products.page.ts';

describe('Products Test Suite', () => {
  before(async function () {
    await ProductsPage.open();
  });

  // TODO: Get product details by API to compare with UI
  it('Should Verify Product details page', async () => {
    const productId = 1;

    await expect(ProductsPage.title).toBeDisplayed();

    await ProductsPage.accessProductById(productId);
    await expect(await browser.getUrl()).toContain(`/product_details/${productId}`);
  });
});
