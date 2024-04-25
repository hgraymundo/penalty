import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Line } from './schemas/line.schema';
import { Model } from 'mongoose';

@Injectable()
export class LineService {
  constructor( @InjectModel(Line.name) private line: Model<Line> ) {}
  create(createLine: any) {
    return this.line.create(createLine)
  }

  findAll() {
      return this.line.find()
  }

  findOne(id: string) {
    return this.line.findById(id).populate('trademarks')
  }

  findByTrademarks(trademark: string) {
    return this.line.find({trademarks: trademark}).populate('trademarks')
  }


}
