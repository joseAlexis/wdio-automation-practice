// const BasePage = require('./basePage.ts');
import ContactForm from "../types/ContactForm.js";
import BasePage from "./basePage.ts";

class ContactUsPage extends BasePage {
    constructor() {
        super('/contact_us');
    }

    public get title() {
        return $('.contact-form > h2.title');
    }

    public get name() {
        return $('[data-qa="name"]');
    }

    public get email() {
        return $('[data-qa="email"]');
    }

    public get subject() {
        return $('[data-qa="subject"]');
    }

    public get message() {
        return $('[data-qa="message"]');
    }

    public async completeForm(contactForm: ContactForm) {
        (await this.name).setValue(contactForm.name);
        (await this.email).setValue(contactForm.email);
        (await this.subject).setValue(contactForm.subject);
        (await this.message).setValue(contactForm.message);
    }
}

export default new ContactUsPage();