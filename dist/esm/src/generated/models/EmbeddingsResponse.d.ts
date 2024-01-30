import type { EmbeddingsList } from './EmbeddingsList';
import type { ModelUsage } from './ModelUsage';
export type EmbeddingsResponse = {
    /**
     * The object type.
     */
    object: string;
    /**
     * Indicates if the embeddings were normalized.
     */
    normalized: boolean;
    data: EmbeddingsList;
    /**
     * The embeddings model used.
     */
    model: string;
    usage: ModelUsage;
};
