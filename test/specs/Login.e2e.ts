import LoginPage from '../pages/login.page.ts';
import HomePage from '../pages/home.page.ts';
import { generateUser } from '../dataProviders/UserDataProvider.ts';
import { createUserAPI, removeUserAPI } from '../api/user.api.ts';

describe("User test suite", () => {
    
    before(async function () {
        await LoginPage.open();


    })

    it('Should login with valid credentials', async () => {
        await expect(LoginPage.signInTitle).toBeDisplayed();
        const data = generateUser();
        console.log(data);

        // Create user for test validation
        const response = await createUserAPI(data);
        expect(response.data.responseCode).toBe(201);
        expect(response.data.message).toBe('User created!');

        await LoginPage.signIn({ email: data.email, password: data.password });
        await expect(HomePage.menuItem(10)).toHaveTextContaining(`Logged in as ${data.name}`);

        const responseDelete = await removeUserAPI({ email: data.email, password: data.password });
        expect(responseDelete.data.responseCode).toBe(200);
        expect(responseDelete.data.message).toBe('Account deleted!')
    })
});