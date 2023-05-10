import BasePage from "./base.page.ts";
import { UserData, UserLogin } from "../types/User.ts";

class UserPage extends BasePage {
    constructor() {
        super('/login')
    }

    get signInTitle() {
        return $('.signup-form > h2');
    }

    get username() {
        return $('[data-qa="signup-name"]');
    }

    get emailSignup() {
        return $('[data-qa="signup-email"]');
    }

    get emailLogin() {
        return $('[data-qa="login-email"]');
    }

    get password() {
        return $('[data-qa="login-password"]');
    }

    get signUpButton() {
        return $('[data-qa="signup-button"]');
    }

    get loginButton() {
        return $('[data-qa="login-button"]')
    }

    async signUp(user: UserData) {
        await this.username.setValue(user.name);
        await this.emailSignup.setValue(user.email);
        await this.signUpButton.click();
    }

    async signIn(data: UserLogin) {
        await this.emailLogin.setValue(data.email);
        await this.password.setValue(data.password);
        await this.loginButton.click();
    }
}

export default new UserPage();