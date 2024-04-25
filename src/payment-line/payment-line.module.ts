import { Module } from '@nestjs/common';
import { PaymentLineService } from './payment-line.service';
import { PaymentLineController } from './payment-line.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentLine, PaymentLineSchema } from './schemas/payment-line.schema';
import { Penalty, PenaltySchema } from 'src/penalty/schemas/penalty.schema';

@Module({
  imports: [
     MongooseModule.forFeature([
      { name: PaymentLine.name, schema: PaymentLineSchema }
      

    ])


  ],
    
  controllers: [PaymentLineController],
  providers: [PaymentLineService],
})
export class PaymentLineModule {}
