import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenaltyService } from './penalty.service';
import { Penalty } from './schemas/penalty.schema';
import { PaymentLineService } from 'src/payment-line/payment-line.service';

@Controller('penalty')
export class PenaltyController {
  constructor(
    private readonly penaltyService: PenaltyService,
    // private readonly paymentLineService: PaymentLineService
    ) {}
    

  @Post()
  create(@Body() createPenalty: Penalty) {

    const data = createPenalty;
    data["invoice"] = (Math.random() + 1).toString(36).substring(2, 15)
    // console.log(data)
    const response = this.penaltyService.create(data)
    // console.log(response)
    return response
    //return this.penaltyService.create(createPenalty);
  }

  @Get()
  findAll() {
    return this.penaltyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penaltyService.findOne(id);
  }

  @Get('voice/:id')
  findByVoice(@Param('id') id: String) {
    return this.penaltyService.findByInvoice(id)
  }



}
