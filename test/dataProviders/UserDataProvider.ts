import { UserData } from "../types/User"
import { faker } from "@faker-js/faker";

export const generateUser = (locale = 'en'): UserData => {
    faker.setLocale(locale)

    return {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        address1: faker.address.streetName(),
        country: faker.address.country(),
        zipcode: faker.address.zipCode(),
        state: faker.address.state(),
        city: faker.address.city(),
        mobile_number: faker.phone.number('#########')
    }
}