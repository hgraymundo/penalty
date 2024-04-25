import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Penalty } from "src/penalty/schemas/penalty.schema";

@Schema()
export class PaymentLine {

    @Prop({ required: true })
    line: string;

    @Prop({ required: true })
    status: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Penalty.name }])
    penalty: Penalty;

}

export const PaymentLineSchema = SchemaFactory.createForClass(PaymentLine);
