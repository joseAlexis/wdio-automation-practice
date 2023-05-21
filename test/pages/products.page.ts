import BasePage from './base.page.ts';

class ProductPage extends BasePage {
  constructor() {
    super('/products');
  }

  get title() {
    return $('.title');
  }

  private getItem(id: number) {
    return $(`[href="/product_details/${id}"]`);
  }

  async accessProductById(id: number) {
    await (await this.getItem(id)).scrollIntoView();
    await (await this.getItem(id)).click();
  }
}

export default new ProductPage();
