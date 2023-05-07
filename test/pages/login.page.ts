import BasePage from "./base.page.ts";
import User from "../types/User.ts";

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

    get email() {
        return $('[data-qa="signup-email"]');
    }

    get signUpButton() {
        return $('data-qa="signup-button"');
    }

    async signUp(user: User) {
        await this.username.setValue(user.username);
        await this.email.setValue(user.email);
    }
}

export default new UserPage();