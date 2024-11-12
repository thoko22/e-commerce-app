export interface Environment {
    db_uri: string;
    jwt_secret_key: string;
    jwt_refresh_secret_key: String;
    sendgrid?: {
        api_key: string;
        email_from: string;
    };
    redis?: {
        username?: string;
        password?: string;
        host: string;
        port: number;
    };
}
export declare function getEnvironmentVariables(): Environment;
