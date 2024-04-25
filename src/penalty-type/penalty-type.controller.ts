import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenaltyTypeService } from './penalty-type.service';
import { Penalty } from 'src/penalty/schemas/penalty.schema';
import { PenaltyType } from './schemas/penalty-type.schema';


@Controller('penalty-type')
export class PenaltyTypeController {
  constructor(private readonly penaltyTypeService: PenaltyTypeService) {}

  @Post()
  async create(@Body() createPenaltyType: PenaltyType) {
    return await this.penaltyTypeService.create(createPenaltyType);
  }

  @Get()
  async findAll() {
    return await this.penaltyTypeService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.penaltyTypeService.remove(id);
  }

}
