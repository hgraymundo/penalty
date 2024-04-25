import { Injectable } from '@nestjs/common';
import { PenaltyType } from './schemas/penalty-type.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PenaltyTypeService {
  constructor(@InjectModel(PenaltyType.name) private penaltyType: Model<PenaltyType>) {}

  async create(createPenaltyType: any) {
    const PenaltyType = new this.penaltyType(createPenaltyType);
    return PenaltyType.save();
  }

  async findAll() {
    return await this.penaltyType.find()
  }

  async remove(id: string) {
    return await this.penaltyType.findByIdAndDelete(id)
  }
}
