export type Embedding = {
    /**
     * The object type.
     */
    object: string;
    /**
     * The generated embeddings.
     */
    embedding: Array<number>;
    /**
     * Index of the request text the embedding corresponds to.
     */
    index: number;
    /**
     * Indicates if the text was truncated for the model.
     */
    truncated?: boolean;
};
