/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { type EmbeddingsRequest, type EmbeddingsResponse, type CancelablePromise, OpenAPI, type OpenAPIConfig} from './generated';
import { request as __request } from './generated/core/request';
import packageInfo from '../package.json';

interface MixedbreadAiConfig {
    apiKey?: OpenAPIConfig['TOKEN'];
    baseUrl?: OpenAPIConfig['BASE'];
    headers?: OpenAPIConfig['HEADERS'];
}

export class MixedbreadAi {
    constructor(protected configuration: MixedbreadAiConfig = {
        apiKey: process.env.MIXEDBREAD_API_KEY ?? process.env.MIXEDBREADAI_API_KEY,
        baseUrl: OpenAPI.BASE,
    }) {
        if (!configuration.apiKey) {
            throw new Error('Missing required apiKey. Please set the MIXEDBREAD_API_KEY environment variable or pass it to the constructor.');
        }
        if (!configuration.baseUrl) {
            throw new Error('Missing required baseUrl. Please set the MIXEDBREAD_BASE_URL environment variable or pass it to the constructor.');
        }
    }

    private getConfig(): OpenAPIConfig {
        return {
            TOKEN: this.configuration.apiKey,
            VERSION: packageInfo.version,
            BASE: this.configuration.baseUrl ?? OpenAPI.BASE,
            CREDENTIALS: 'include',
            WITH_CREDENTIALS: true,
            HEADERS: {
                'User-Agent': `mixedbreadai-sdk/typescript-sdk`,
                ...this.configuration.headers,
            }
        };
    }

    /**
     * Create embeddings
     * This endpoint allows you to post text data and receive embeddings in response. The embeddings are generated using the model specified in the request body.
     * @param requestBody
     * @returns EmbeddingsResponse Successfully generated embeddings.
     * @throws ApiError
     */
    public embeddings(
        requestBody: EmbeddingsRequest,
    ): CancelablePromise<EmbeddingsResponse> {
        return __request(this.getConfig(), {
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
