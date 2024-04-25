import { Injectable } from '@nestjs/common';
import { CreatePaymentLineDto } from './dto/create-payment-line.dto';
import { UpdatePaymentLineDto } from './dto/update-payment-line.dto';
import { PaymentLine } from './schemas/payment-line.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PaymentLineService {
  constructor( @InjectModel(PaymentLine.name) private paymentLine: Model<PaymentLine>) {}

  findAll() {
    return this.paymentLine.find();
  }

  findOne(id: string) {
    return this.paymentLine.findById(id)
  }
    
}
