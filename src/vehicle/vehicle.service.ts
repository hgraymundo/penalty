import { Injectable } from '@nestjs/common';
import { Vehicle } from './schemas/vehicle.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VehicleService {
  constructor(@InjectModel(Vehicle.name) private vehicle: Model<Vehicle>) {}


  
  async findAll() {
    return await this.vehicle.find()
  }

  async findByPlate(plate: string) {
     return await this.vehicle.find({ Plate: plate })
   }
  
}
