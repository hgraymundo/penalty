import { Controller, Get, Post, Body } from '@nestjs/common';
import { TrademarkService } from './trademark.service';
import { Trademark } from './schemas/trademark.schema';


@Controller('trademark')
export class TrademarkController {
  constructor(private readonly trademarkService: TrademarkService) {}

  @Post()
  async create(@Body() createTrademark: Trademark) {
    return await this.trademarkService.create(createTrademark);
  }

  @Get()
  async findAll() {
    return await this.trademarkService.findAll();
  }

}
