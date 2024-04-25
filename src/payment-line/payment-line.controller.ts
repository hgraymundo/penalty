import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentLineService } from './payment-line.service';

@Controller('payment-line')
export class PaymentLineController {
  constructor(private readonly paymentLineService: PaymentLineService) {}

  @Get()
  findAll() {
    return this.paymentLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentLineService.findOne(id);
  }
}