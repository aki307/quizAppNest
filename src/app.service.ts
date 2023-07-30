import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async requestData(): Promise<object> {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&type=multiple',
      );
      const text = await response.text();
      const fetchText = JSON.parse(text);
      return fetchText;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
}
