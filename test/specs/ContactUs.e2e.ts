import ContactUsPage from "../pages/contactUs.page.ts";
import ContactForm from "../types/ContactForm.ts";
import { alertIsPresent } from "wdio-wait-for";

describe("Contact Us Test Suite", () => {

    before(async function () {
        await ContactUsPage.open();
    })

    it("Should complete the contact form", async () => {
        const contactForm: ContactForm = {
            name: "Jose Bolanos",
            email: "joseb@test.com",
            subject: "Doing some testing",
            message: "This is the message"
        }
        await expect(ContactUsPage.title).toBeDisplayed();

        await ContactUsPage.completeForm(contactForm);
        // await browser.waitUntil(alertIsPresent(), { timeout: 15000, timeoutMsg: 'Alert wasnt displayed' });
        await browser.acceptAlert();
        await expect(ContactUsPage.sucessMessage).toBeDisplayed();
        await expect(ContactUsPage.sucessMessage).toHaveText('Success! Your details have been submitted successfully.');
        // await browser.url('/contact_us');
        // await expect($('.contact-form > h2.title')).toBeDisplayedInViewport();

    })
})