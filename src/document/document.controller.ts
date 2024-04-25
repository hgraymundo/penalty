import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentService } from './document.service';
import { Doc } from './schemas/doc.schema';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  create(@Body() createDocument: Doc) {
    return this.documentService.create(createDocument);
  }

  @Get()
  findAll() {
    return this.documentService.findAll();
  }
}
