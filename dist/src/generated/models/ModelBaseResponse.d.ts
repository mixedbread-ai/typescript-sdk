import type { ModelUsage } from './ModelUsage';
export type ModelBaseResponse = {
    /**
     * The embeddings model used.
     */
    model: string;
    usage: ModelUsage;
};
