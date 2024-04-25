import { Module } from '@nestjs/common';
import { PenaltyService } from './penalty.service';
import { PenaltyController } from './penalty.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Penalty,PenaltySchema } from './schemas/penalty.schema';
import { PaymentLine, PaymentLineSchema } from 'src/payment-line/schemas/payment-line.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Penalty.name, schema: PenaltySchema }, { name: PaymentLine.name, schema: PaymentLineSchema }]),],
  controllers: [PenaltyController],
  providers: [PenaltyService],
})
export class PenaltyModule {}
