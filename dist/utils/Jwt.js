"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jwt = void 0;
const jwt = require("jsonwebtoken");
const environment_1 = require("../environments/environment");
const Crypto = require("crypto");
const Redis_1 = require("./Redis");
class Jwt {
    static jwtSign(payload, userId, expires_in = '10h') {
        //Jwt.gen_secret_key();
        return jwt.sign(payload, (0, environment_1.getEnvironmentVariables)().jwt_secret_key, {
            expiresIn: expires_in,
            audience: userId.toString(),
            issuer: 'mampoza.com'
        });
    }
    static jwtVerify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, (0, environment_1.getEnvironmentVariables)().jwt_secret_key, (err, decoded) => {
                if (err)
                    reject(err);
                else if (!decoded)
                    reject(new Error("User is not authorised."));
                else
                    resolve(decoded);
            });
        });
    }
    static jwtSignRefreshToken(payload_1, userId_1) {
        return __awaiter(this, arguments, void 0, function* (payload, userId, expires_in = '1y', redis_ex = 365 * 24 * 60 * 60
        //redis_ex: number = 20
        ) {
            try {
                const refreshToken = jwt.sign(payload, (0, environment_1.getEnvironmentVariables)().jwt_refresh_secret_key.toString(), {
                    expiresIn: expires_in,
                    audience: userId.toString(),
                    issuer: 'mampoza.com'
                });
                // set refreshToken in Redis with key userId
                yield Redis_1.Redis.setValue(userId.toString(), refreshToken, redis_ex);
                return refreshToken;
            }
            catch (e) {
                //throw new Error(e);
                throw (e);
            }
        });
    }
    static jwtVerifyRefreshToken(refreshToken) {
        return new Promise((resolve, reject) => {
            jwt.verify(refreshToken, (0, environment_1.getEnvironmentVariables)().jwt_refresh_secret_key.toString(), (err, decoded) => {
                if (err)
                    reject(err);
                else if (!decoded)
                    reject(new Error("User is not authorised."));
                else {
                    // match refresh tokens from redis database
                    const user = decoded;
                    Redis_1.Redis.getValue(user.aud).then(value => {
                        if (value === refreshToken)
                            resolve(decoded);
                        else
                            reject(new Error("Your session is expired! Please login again"));
                    }).catch(e => {
                        reject(e);
                    });
                    resolve(decoded);
                }
            });
        });
    }
    static gen_secret_key() {
        const DEV_access_token_secret_key = Crypto.randomBytes(32).toString('hex');
        const DEV_refresh_token_secret_key = Crypto.randomBytes(32).toString('hex');
        const PROD_access_token_secret_key = Crypto.randomBytes(32).toString('hex');
        const PROD_refresh_token_secret_key = Crypto.randomBytes(32).toString('hex');
        console.table({
            DEV_access_token_secret_key,
            DEV_refresh_token_secret_key,
            PROD_access_token_secret_key,
            PROD_refresh_token_secret_key
        });
    }
}
exports.Jwt = Jwt;
