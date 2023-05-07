import ContactForm from "../types/ContactForm.ts";
import BasePage from "./base.page.ts";

class ContactUsPage extends BasePage {
    constructor() {
        super('/contact_us');
    }

    get title() {
        return $('.contact-form > h2.title');
    }

    get name() {
        return $('[data-qa="name"]');
    }

    get email() {
        return $('[data-qa="email"]');
    }

    get subject() {
        return $('[data-qa="subject"]');
    }

    get message() {
        return $('[data-qa="message"]');
    }

    get submitButton() {
        return $('[data-qa="submit-button"]');
    }

    get sucessMessage() {
        return $('.title + .alert-success');
    }

    async completeForm(contactForm: ContactForm) {
        await (await this.name).setValue(contactForm.name);
        await (await this.email).setValue(contactForm.email);
        await (await this.subject).setValue(contactForm.subject);
        await (await this.message).setValue(contactForm.message);
        await (await this.submitButton).scrollIntoView();
        await (await this.submitButton).click();
    }
}

export default new ContactUsPage();