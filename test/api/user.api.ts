import axios, { formToJSON } from 'axios';
import { UserData, UserLogin } from '../types/User';
import { createFormDataFromJson } from "../utils/utilities.ts"

export const createUserAPI = async (data: UserData) => {
    const form = createFormDataFromJson(data);

    return await axios.post('https://automationexercise.com/api/createAccount', form);
}

export const removeUserAPI = async (login: UserLogin) => {
    const form = createFormDataFromJson(login);
    return await axios.delete('https://automationexercise.com/api/deleteAccount', { data: form });
}

const getProductList = async () => {
    return await axios.get('https://automationexercise.com/api/productsList');
}