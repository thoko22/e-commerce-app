import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        images: string[];
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
    }>;
    description?: string;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        images: string[];
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
    }>;
    description?: string;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}> & {
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        images: string[];
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
    }>;
    description?: string;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        images: string[];
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
    }>;
    description?: string;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        images: string[];
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
    }>;
    description?: string;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}>> & mongoose.FlatRecord<{
    name: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
    images: string[];
    store_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    category_id: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    variations: mongoose.Types.DocumentArray<{
        size: mongoose.Types.DocumentArray<{
            size?: string;
            sku?: string;
            price?: number;
            stock_unit?: number;
        }>;
        images: string[];
        type?: string;
        sku?: string;
        price?: number;
        stock_unit?: number;
    }>;
    description?: string;
    sku?: string;
    price?: number;
    stock_unit?: number;
    metrics?: {
        orders?: number;
        ratings?: number;
    };
    sub_category_id?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
    specifications?: any;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
