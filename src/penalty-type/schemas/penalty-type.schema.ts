import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class PenaltyType {
    @Prop({ required: true })
    code: string;
    @Prop({ required: true })
    description: string;
    @Prop({ required: true })
    uma: string;
    @Prop({ required: true })
    total_price: string;
}

export const PenaltyTypeSchema = SchemaFactory.createForClass(PenaltyType);
 