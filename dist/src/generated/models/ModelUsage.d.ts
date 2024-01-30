export type ModelUsage = {
    /**
     * The number of prompt tokens used.
     */
    prompt_tokens: number;
    /**
     * The total number of tokens used.
     */
    total_tokens: number;
    /**
     * The number of completion tokens used.
     */
    completion_tokens?: number;
};
