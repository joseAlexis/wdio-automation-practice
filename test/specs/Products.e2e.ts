import ProductsPage from "../pages/products.page.ts";

describe("Products Test Suite", () => {
    before(async function () {
        await ProductsPage.open();
    })

    it('Should Verify Product details page', async () => {
        const productid = 1;

        await expect(ProductsPage.title).toBeDisplayed();
        
        await ProductsPage.accessProductById(productid);
        await expect(await browser.getUrl()).toContain('/products');
    });
})