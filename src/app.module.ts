import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PenaltyModule } from './penalty/penalty.module';
import { PenaltyTypeModule } from './penalty-type/penalty-type.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleModule } from './vehicle/vehicle.module';
import { TrademarkModule } from './trademark/trademark.module';
import { LineModule } from './line/line.module';
import { DocumentModule } from './document/document.module';
import { UserModule } from './user/user.module';
import { PaymentLineModule } from './payment-line/payment-line.module';
@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://hgraydev:65nohUCNvWAUD8zm@demo-model.mger9fd.mongodb.net/People_Involved'),
  PenaltyModule, PenaltyTypeModule, VehicleModule, TrademarkModule, LineModule, DocumentModule, UserModule, PaymentLineModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
