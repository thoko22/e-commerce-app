import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    type: string;
    status: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    name?: string;
    email?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    type: string;
    status: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    name?: string;
    email?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
}> & {
    type: string;
    status: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    name?: string;
    email?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    status: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    name?: string;
    email?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    type: string;
    status: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    name?: string;
    email?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
}>> & mongoose.FlatRecord<{
    type: string;
    status: string;
    account_verified: boolean;
    verification_token: string;
    verification_token_time: Date;
    phone: string;
    created_at: Date;
    updated_at: Date;
    name?: string;
    email?: string;
    photo?: string;
    password?: string;
    reset_password_token?: string;
    reset_password_token_time?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
