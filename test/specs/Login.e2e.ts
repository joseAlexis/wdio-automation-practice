import LoginPage from '../pages/login.page.ts';
import HomePage from '../pages/home.page.ts';
import { generateUser } from '../dataProviders/UserDataProvider.ts';
import { createUserAPI, removeUserAPI } from '../api/user.api.ts';

describe("User test suite", () => {
    before(async function () {
        this.user = generateUser();
        console.log(this.user);
        await createUserAPI(this.user);
    });

    after(async function () {
        await removeUserAPI({ email: this.user.email, password: this.user.password });
    });

    it('Should login with valid credentials', async function () {
        await LoginPage.open();
        await expect(LoginPage.signInTitle).toBeDisplayed();

        await LoginPage.signIn({ email: this.user.email, password: this.user.password });
        await expect(HomePage.menuItem(10)).toHaveTextContaining(`Logged in as ${this.user.name}`);
    })
});