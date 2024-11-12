import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    photo?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    photo?: string;
}> & {
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    photo?: string;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    photo?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    photo?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    photo?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
