import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Penalty } from './schemas/penalty.schema';
import { Model } from 'mongoose';
import { PaymentLine } from '../payment-line/schemas/payment-line.schema'; 

@Injectable()
export class PenaltyService {

  constructor( @InjectModel(Penalty.name) private penalty: Model<Penalty>, @InjectModel(PaymentLine.name) private paymentLine: Model<PaymentLine>) {}
  async create(createPenaltyDto: Penalty) {   
    const penalty = new this.penalty(createPenaltyDto)
    
    const penaltyline = await this.paymentLine.create({
      "line":(Math.random() + 1).toString(36).substring(2, 15),
      "status":"pending",
      "penalty": penalty
    })
    penalty.save()
    penaltyline.save()
    return penaltyline;
  } 

  findAll() {
    return this.penalty.find().populate('penalties').populate('user').populate('docs')
  }

  findOne(id: string) {
    return this.penalty.findById(id).populate('penalties').populate('user').populate('docs')
  }

  findByInvoice(id: String) {
    return this.penalty.find({invoice: id})
  }

  remove(id: number) {
    return `This action removes a #${id} penalty`;
  }
}
