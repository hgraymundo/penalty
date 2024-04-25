import { Injectable } from '@nestjs/common';

import { InjectModel, } from '@nestjs/mongoose';
import { Trademark } from './schemas/trademark.schema';
import { Model } from 'mongoose';

@Injectable()
export class TrademarkService {
  constructor(@InjectModel(Trademark.name) private trademark: Model<Trademark>) {}

  create(createTrademark: any) {
    return this.trademark.create(createTrademark);
  }

 async findAll() {
   return await this.trademark.find();
 }
}
