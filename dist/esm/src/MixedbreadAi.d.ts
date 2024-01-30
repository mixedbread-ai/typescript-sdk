import { type EmbeddingsRequest, type EmbeddingsResponse, type CancelablePromise, type OpenAPIConfig } from './generated';
interface MixedbreadAiConfig {
    apiKey?: OpenAPIConfig['TOKEN'];
    baseUrl?: OpenAPIConfig['BASE'];
    headers?: OpenAPIConfig['HEADERS'];
}
export declare class MixedbreadAi {
    protected configuration: MixedbreadAiConfig;
    constructor(configuration?: MixedbreadAiConfig);
    private getConfig;
    /**
     * Create embeddings
     * This endpoint allows you to post text data and receive embeddings in response. The embeddings are generated using the model specified in the request body.
     * @param requestBody
     * @returns EmbeddingsResponse Successfully generated embeddings.
     * @throws ApiError
     */
    embeddings(requestBody: EmbeddingsRequest): CancelablePromise<EmbeddingsResponse>;
}
export {};
