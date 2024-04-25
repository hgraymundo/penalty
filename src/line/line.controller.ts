import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LineService } from './line.service';
import { Line } from './schemas/line.schema';

@Controller('line')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  create(@Body() createLine: Line) {
    console.log(createLine)
    return this.lineService.create(createLine);
  }

  @Get()
  findAll() {
    return this.lineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lineService.findOne(id);
  } 

  @Get('trademarks/:trademark')
  findByTrademarks(@Param('trademark') trademark: string) {
    return this.lineService.findByTrademarks(trademark)
  }


}
