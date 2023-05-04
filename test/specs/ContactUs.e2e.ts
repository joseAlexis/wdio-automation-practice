import ContactUsPage from "../pageobjects/contactUs.page.ts";
import ContactForm from "../types/ContactForm.js";

describe("Contact Us Test Suite", () => {
    
    before(async function() {
        await ContactUsPage.open();
    })

    it("Should complete the contact form", async () => {
        const contactForm:ContactForm = {
            name: "Jose Bolanos",
            email: "joseb@test.com",
            subject: "Doing some testing",
            message: "This is the message"
        }
        await expect(ContactUsPage.title).toBeDisplayed();
        
        await ContactUsPage.completeForm(contactForm);

        // await browser.url('/contact_us');
        // await expect($('.contact-form > h2.title')).toBeDisplayedInViewport();

    })
})