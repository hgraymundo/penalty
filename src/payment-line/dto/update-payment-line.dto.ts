import { PartialType } from '@nestjs/swagger';
import { CreatePaymentLineDto } from './create-payment-line.dto';

export class UpdatePaymentLineDto extends PartialType(CreatePaymentLineDto) {}
