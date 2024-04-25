import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Doc {
    @Prop()
    name: string;

    @Prop()
    status: string;
}

export const DocSchema = SchemaFactory.createForClass(Doc);
