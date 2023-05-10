type Title = 'Mr.' | 'Mrs';

export interface UserData {
    name: string;
    email: string;
    password: string;
    title?: Title;
    birth_date?: string;
    birth_month?: string;
    birth_year?: string;
    firstname: string;
    lastname: string;
    company?: string;
    address1: string;
    address2?: string;
    country: string;
    zipcode: String;
    state: String;
    city: string;
    mobile_number: String;
}

export interface UserLogin {
    email:string;
    password:string;
}