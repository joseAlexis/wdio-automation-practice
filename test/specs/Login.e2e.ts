import UserPage from '../pages/login.page.ts';
import User from '../types/User';
import { generateUser } from '../dataProviders/UserDataProvider.ts';

describe("User test suite", () => {
    before(async function () {
        await UserPage.open();
    })

    it('Should register User', async () => {
        await expect(UserPage.signInTitle).toBeDisplayed();

        const user = generateUser();
        // await UserPage.signUp(user);
    })
});