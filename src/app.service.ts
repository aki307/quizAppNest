import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { Quiz, QuizApiResponse } from './quiz.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  requestData(): Promise<QuizApiResponse> { 
    return fetch('https://opentdb.com/api.php?amount=10&type=multiple')
      .then((response) => response.json()) 
      .then((data: QuizApiResponse) => {
        console.log(data);
        return data;
      })
      .catch((error) => console.log(error));
  }
}
