import * as mongoose from "mongoose";
declare const _default: mongoose.Model<{
    total: number;
    address: any;
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
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    total: number;
    address: any;
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
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
}> & {
    total: number;
    address: any;
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
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    total: number;
    address: any;
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
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    total: number;
    address: any;
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
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
}>> & mongoose.FlatRecord<{
    total: number;
    address: any;
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
    payment_status: boolean;
    payment_mode: string;
    grandTotal: number;
    deliveryCharge: number;
    instruction?: string;
    tracking?: {
        status?: string;
        company?: string;
        tracking_no?: string;
        estimated_delivery?: string;
    };
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
