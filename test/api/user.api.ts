import { UserData, UserLogin } from '../types/User';
import { createFormDataFromJson } from '../utils/utilities.ts';
import { HttpClient } from './init.ts';

class UserAPI extends HttpClient {
  constructor() {
    super();
  }

  async create(data: UserData) {
    const form = createFormDataFromJson(data);

    return await this.instance.post('/api/createAccount', form);
  }

  async remove(login: UserLogin) {
    const form = createFormDataFromJson(login);
    return await this.instance.delete('/api/deleteAccount', { data: form });
  }
}

export default new UserAPI();
