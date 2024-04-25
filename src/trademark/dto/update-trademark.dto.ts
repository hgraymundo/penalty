import { PartialType } from '@nestjs/swagger';
import { CreateTrademarkDto } from './create-trademark.dto';

export class UpdateTrademarkDto extends PartialType(CreateTrademarkDto) {}
