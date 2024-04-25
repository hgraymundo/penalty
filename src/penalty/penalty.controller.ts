import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenaltyService } from './penalty.service';
import { Penalty } from './schemas/penalty.schema';

@Controller('penalty')
export class PenaltyController {
  constructor(
    private readonly penaltyService: PenaltyService) {}

  @Post()
  create(@Body() createPenalty: Penalty) {

    const data = createPenalty;
    data["invoice"] = (Math.random() + 1).toString(36).substring(2, 15)
    console.log(data)
    const response = this.penaltyService.create(data)
    return "adasdasd"
    //return this.penaltyService.create(createPenalty);
  }

  @Get()
  findAll() {
    return this.penaltyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penaltyService.findOne(+id);
  }

  @Get('voice/:id')
  findByVoice(@Param('id') id: String) {
    return this.penaltyService.findByInvoice(id)
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penaltyService.remove(+id);
  }
}
