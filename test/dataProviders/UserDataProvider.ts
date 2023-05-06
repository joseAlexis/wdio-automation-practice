import User from "../types/User"
import { faker } from "@faker-js/faker";

export const generateUser = (): User => {
    return {
        username: faker.internet.userName(),
        email: faker.internet.email()
    }
}