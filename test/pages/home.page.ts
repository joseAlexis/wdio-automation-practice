class HomePage {
  get navigationBar() {
    return $('.navbar-nav');
  }

  menuItem(item) {
    return this.navigationBar.$(`li:nth-child(${item})`);
  }
}

export default new HomePage();
