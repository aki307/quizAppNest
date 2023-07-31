import { Controller, Get,Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getIndexHtml(@Res() res: Response) {
    return res.sendFile(join(__dirname, '..', 'public', 'index.html'));
  }
  @Get('/index/request')
  async requestData(@Res() res): Promise<void> {
    try {
      const data = await this.appService.requestData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
}






