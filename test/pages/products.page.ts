import BasePage from "./base.page.ts";

class ProductPage extends BasePage {
    constructor() {
        super('/products');
    }

    get title() {
        return $('.title')
    }

    accessProductById(id: number) {
        return $(`[href="/product_details/${id}"]`).click();
    }
}

export default new ProductPage();