import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Vehicle {

    @Prop({ required: true })
    Plate: string;
    @Prop({ required: true })
    Trademark: string;
    @Prop({ required: true })
    Line: string;
    @Prop({ required: true })
    Model: string;
    @Prop({ required: true })
    Serial_number: string;
    @Prop({ required: true })
    Enginer_number: string;
    @Prop({ required: true })
    Color: string;
    @Prop({ required: true })
    Status: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
