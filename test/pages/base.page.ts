export default class BasePage {
  private path = '';

  constructor(_path: string) {
    this.path = _path;
  }

  public open() {
    return browser.url(`${this.path}`);
  }
}
