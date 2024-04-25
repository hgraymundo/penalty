import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { PenaltyType } from "src/penalty-type/schemas/penalty-type.schema";
import { User } from "src/user/schemas/user.schema";
import { Doc } from "src/document/schemas/doc.schema";

@Schema()
export class Penalty {

    @Prop({ required: true })
    invoice: string;

    @Prop({ required: true })
    penalty_date: Date;

    @Prop({ required: true })
    plate: string;

    @Prop({ required: true })
    latitude: string;
    
    @Prop({ required: true })
    longitude: string;
 
    @Prop({ required: true })
    driver_name: string;

    @Prop()
    comments: string;
 
    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: PenaltyType.name }])
    penalties: [PenaltyType]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Doc.name }])
    docs: [Doc]

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: User.name } ])
    user: User


} 

export const PenaltySchema = SchemaFactory.createForClass(Penalty);
