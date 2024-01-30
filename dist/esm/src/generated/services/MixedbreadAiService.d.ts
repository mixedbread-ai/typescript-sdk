import type { EmbeddingsRequest } from '../models/EmbeddingsRequest';
import type { EmbeddingsResponse } from '../models/EmbeddingsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MixedbreadAiService {
    /**
     * Create embeddings
     * This endpoint allows you to post text data and receive embeddings in response. The embeddings are generated using the model specified in the request body.
     * @param requestBody
     * @returns EmbeddingsResponse Successfully generated embeddings.
     * @throws ApiError
     */
    static embeddings(requestBody: EmbeddingsRequest): CancelablePromise<EmbeddingsResponse>;
}
