import BasePage from './base.page.ts';

export default class ProductDetailsPage extends BasePage {
  constructor(id) {
    super(`/product_details/${id}`);
  }

  get name() {
    return $('.product-information > h2');
  }

  get category() {
    return $('.product-information > p:nth-child(1)');
  }

  get price() {
    return $('.product-information > span > span');
  }

  get brand() {
    return $('.product-information > p:nth-child(4)');
  }
}
