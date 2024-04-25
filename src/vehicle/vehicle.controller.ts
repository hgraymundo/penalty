import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async findAll() {
    return await this.vehicleService.findAll()
  }

  @Get('plate/:plate')
  findByPlate(@Param('plate') plate: string) {
    return this.vehicleService.findByPlate(plate)
  } 
}
