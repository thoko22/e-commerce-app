import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: string;
    landmark: string;
    house: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: string;
    landmark: string;
    house: string;
}> & {
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: string;
    landmark: string;
    house: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: string;
    landmark: string;
    house: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: string;
    landmark: string;
    house: string;
}>> & mongoose.FlatRecord<{
    address: string;
    title: string;
    created_at: Date;
    updated_at: Date;
    lat: number;
    lng: number;
    user_id: string;
    landmark: string;
    house: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
