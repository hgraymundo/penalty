import { Module } from '@nestjs/common';
import { PenaltyTypeService } from './penalty-type.service';
import { PenaltyTypeController } from './penalty-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PenaltyType, PenaltyTypeSchema } from './schemas/penalty-type.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: PenaltyType.name , schema: PenaltyTypeSchema }])],
  controllers: [PenaltyTypeController],
  providers: [PenaltyTypeService],
})
export class PenaltyTypeModule {}
