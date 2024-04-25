import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Doc, DocSchema } from './schemas/doc.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Doc.name, schema: DocSchema }])],
  controllers: [DocumentController],
  providers: [DocumentService],
})
export class DocumentModule {}
