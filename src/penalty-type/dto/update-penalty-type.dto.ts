import { PartialType } from '@nestjs/swagger';
import { CreatePenaltyTypeDto } from './create-penalty-type.dto';

export class UpdatePenaltyTypeDto extends PartialType(CreatePenaltyTypeDto) {}
