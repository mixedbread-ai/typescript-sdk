export type EmbeddingsRequest = {
    /**
     * Specifies the model to be used for generating embeddings.
     */
    model: string;
    /**
     * Specifies the input for which the embeddings should be generated.
     */
    input: (Array<string> | string);
    /**
     * Required only for instruction based models. Specifies the instruction for generating embeddings.
     */
    instruction?: string;
    /**
     * Specifies whether the embeddings should be normalized.
     */
    normalized?: boolean;
};
