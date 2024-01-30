"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedbreadAi = void 0;
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
const generated_1 = require("./generated");
const request_1 = require("./generated/core/request");
const package_json_1 = __importDefault(require("../package.json"));
class MixedbreadAi {
    constructor(configuration) {
        var _a;
        if (configuration === void 0) { configuration = {
            apiKey: (_a = process.env.MIXEDBREAD_API_KEY) !== null && _a !== void 0 ? _a : process.env.MIXEDBREADAI_API_KEY,
            baseUrl: generated_1.OpenAPI.BASE,
        }; }
        this.configuration = configuration;
        if (!configuration.apiKey) {
            throw new Error('Missing required apiKey. Please set the MIXEDBREAD_API_KEY environment variable or pass it to the constructor.');
        }
        if (!configuration.baseUrl) {
            throw new Error('Missing required baseUrl. Please set the MIXEDBREAD_BASE_URL environment variable or pass it to the constructor.');
        }
    }
    getConfig() {
        var _a;
        return {
            TOKEN: this.configuration.apiKey,
            VERSION: package_json_1.default.version,
            BASE: (_a = this.configuration.baseUrl) !== null && _a !== void 0 ? _a : generated_1.OpenAPI.BASE,
            CREDENTIALS: 'include',
            WITH_CREDENTIALS: true,
            HEADERS: Object.assign({ 'User-Agent': `mixedbreadai-sdk/typescript-sdk` }, this.configuration.headers)
        };
    }
    /**
     * Create embeddings
     * This endpoint allows you to post text data and receive embeddings in response. The embeddings are generated using the model specified in the request body.
     * @param requestBody
     * @returns EmbeddingsResponse Successfully generated embeddings.
     * @throws ApiError
     */
    embeddings(requestBody) {
        return (0, request_1.request)(this.getConfig(), {
            method: 'POST',
            url: '/v1/embeddings/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. The request was not valid, indicating issues like missing parameters or incorrect data formats.`,
                401: `Unauthorized. Authentication failed, or the user lacks the necessary permissions for the requested operation.`,
                402: `Required Payment. The request is valid but cannot proceed without a balance top-up.`,
                404: `Not Found. The requested resource is not available or does not exist.`,
                422: `Unprocessable Entity. The request was well-formed but was unable to be followed due to semantic errors.`,
                429: `Too Many Requests. Too many requests have been sent in a given amount of time, exceeding the rate limit.`,
                500: `Internal Server Error. An unexpected error occurred on the server side.`,
            },
        });
    }
}
exports.MixedbreadAi = MixedbreadAi;
