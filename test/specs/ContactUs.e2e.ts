import { generateContactUsData } from '../dataProviders/ContactProvider.ts';
import ContactUsPage from '../pages/contactUs.page.ts';

describe('Contact Us Test Suite', () => {
  before(async function () {
    await ContactUsPage.open();
  });

  it('Should complete the contact form', async () => {
    const contactForm = generateContactUsData();
    await expect(ContactUsPage.title).toBeDisplayed();

    await ContactUsPage.completeForm(contactForm);
    await browser.acceptAlert();
    await expect(ContactUsPage.sucessMessage).toBeDisplayed();
    await expect(ContactUsPage.sucessMessage).toHaveText(
      'Success! Your details have been submitted successfully.'
    );
  });
});
