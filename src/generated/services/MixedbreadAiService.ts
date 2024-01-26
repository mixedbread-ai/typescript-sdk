/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbeddingsRequest } from '../models/EmbeddingsRequest';
import type { EmbeddingsResponse } from '../models/EmbeddingsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MixedbreadAiService {
    /**
     * Create embeddings
     * This endpoint allows you to post text data and receive embeddings in response. The embeddings are generated using the model specified in the request body.
     * @param requestBody
     * @returns EmbeddingsResponse Successfully generated embeddings.
     * @throws ApiError
     */
    public static embeddings(
        requestBody: EmbeddingsRequest,
    ): CancelablePromise<EmbeddingsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/embeddings/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request. The request was not valid, indicating issues like missing parameters or incorrect data formats.`,
                401: `Unauthorized. Authentication failed, or the user lacks the necessary permissions for the requested operation.`,
                402: `Required Payment. The request is valid but cannot proceed without a balance top-up.`,
                404: `Not Found. The requested resource is not available or does not exist.`,
                429: `Too Many Requests. Too many requests have been sent in a given amount of time, exceeding the rate limit.`,
                500: `Internal Server Error. An unexpected error occurred on the server side.`,
            },
        });
    }
}
