import { Module } from '@nestjs/common';
import { LineService } from './line.service';
import { LineController } from './line.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Line, LineSchema } from './schemas/line.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Line.name , schema: LineSchema }])],
  controllers: [LineController],
  providers: [LineService],
})
export class LineModule {}
