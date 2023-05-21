import LoginPage from '../pages/login.page.ts';
import HomePage from '../pages/home.page.ts';
import { generateUser } from '../dataProviders/UserDataProvider.ts';
import UserApi from '../api/user.api.ts';

describe('User test suite', () => {
  before(async function () {
    this.user = generateUser();
    await UserApi.create(this.user);
  });

  after(async function () {
    await UserApi.remove({ email: this.user.email, password: this.user.password });
  });

  it('Should login with valid credentials', async function () {
    await LoginPage.open();
    await expect(LoginPage.signInTitle).toBeDisplayed();

    await LoginPage.signIn({ email: this.user.email, password: this.user.password });
    await expect(HomePage.menuItem(10)).toHaveTextContaining(`Logged in as ${this.user.name}`);
  });
});
