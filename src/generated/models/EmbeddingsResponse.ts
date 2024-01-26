/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbeddingsList } from './EmbeddingsList';
import type { ModelUsage } from './ModelUsage';
export type EmbeddingsResponse = {
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

