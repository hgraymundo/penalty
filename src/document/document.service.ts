import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doc } from './schemas/doc.schema'; 


@Injectable()
export class DocumentService {

  constructor( @InjectModel(Doc.name) private document: Model<Doc>) {}

  create(createDocument: Doc) {
    return this.document.create(createDocument)
  }

  findAll() {
    return this.document.find()
  }

 
}
