import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Trademark {
    @Prop({ required: true })
    description: string;
}

export const TrademarkSchema = SchemaFactory.createForClass(Trademark);
