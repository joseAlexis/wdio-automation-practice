import axios, { AxiosInstance } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.BASE_URL,
    });
  }
}
