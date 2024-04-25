import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
import { Trademark } from "src/trademark/schemas/trademark.schema";

@Schema()
export class Line {

    @Prop()
    name: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Trademark.name }])
    trademarks: Trademark;

}

export const LineSchema = SchemaFactory.createForClass(Line);
