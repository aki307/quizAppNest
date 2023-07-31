import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('index') 
export class IndexController {
  constructor(private readonly appService: AppService) {}

  @Get('request') 
  async getIndexRequest() {
    const data = await this.appService.requestData();
    
    return data;
  }
}
