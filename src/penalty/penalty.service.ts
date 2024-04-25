import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Penalty } from './schemas/penalty.schema';
import { Model } from 'mongoose';
import { PaymentLine } from '../payment-line/schemas/payment-line.schema'; 

@Injectable()
export class PenaltyService {

  constructor( @InjectModel(Penalty.name) private penalty: Model<Penalty>, @InjectModel(PaymentLine.name) private paymentLine: Model<PaymentLine>) {}
  create(createPenaltyDto: Penalty) {
    const penalty = new this.penalty(createPenaltyDto).save();
    penalty.then((data) => {
      const data_ = {
         line: 'Penalty',
         penalty: data._id,
         status: 'pending'
      }
      const paymentLine = new this.paymentLine(data_).save();
      console.log(paymentLine)
      return paymentLine;
    })
    
    // console.log((Math.random() + 1).toString(36).substring(2, 25))
    // return penalty
  }

  findAll() {
    return this.penalty.find().populate('penalties').populate('user').populate('docs')
  }

  findOne(id: number) {
    return `This action returns a #${id} penalty`;
  }

  findByInvoice(id: String) {
    return this.penalty.find({invoice: id})
  }

  remove(id: number) {
    return `This action removes a #${id} penalty`;
  }
}
