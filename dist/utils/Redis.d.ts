export declare class Redis {
    static connectToRedis(): void;
    static setValue(key: string, value: string, expires_at?: any): Promise<void>;
    static getValue(key: string): Promise<string>;
    static deleteKey(key: string): Promise<void>;
}
