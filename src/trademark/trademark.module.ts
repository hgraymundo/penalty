import { Module } from '@nestjs/common';
import { TrademarkService } from './trademark.service';
import { TrademarkController } from './trademark.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trademark, TrademarkSchema } from './schemas/trademark.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Trademark.name, schema: TrademarkSchema }])],

  controllers: [TrademarkController],
  providers: [TrademarkService],
})
export class TrademarkModule {}
