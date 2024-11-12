import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    total: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    instruction?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    total: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    instruction?: string;
}> & {
    total: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    instruction?: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    total: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    instruction?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    total: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    instruction?: string;
}>> & mongoose.FlatRecord<{
    total: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    products: any[];
    user_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    instruction?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
