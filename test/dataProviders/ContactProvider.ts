import { faker } from '@faker-js/faker';
import ContactForm from '../types/ContactForm';

export const generateContactUsData = (): ContactForm => {
    return {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        subject: faker.lorem.words(),
        message: faker.lorem.paragraph()
    }
}