/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as MixedbreadAI from "../..";
/**
 * @example
 *     {
 *         input: "input",
 *         model: "model"
 *     }
 */
export interface EmbeddingsRequest {
    dimensions?: number;
    encodingFormat?: MixedbreadAI.EmbeddingsRequestEncodingFormat;
    input: MixedbreadAI.Input;
    instruction?: string;
    /** The model to use for creating embeddings */
    model: string;
    /** Whether to normalize the embeddings */
    normalized?: boolean;
    prompt?: string;
    texts?: string[];
    /** The truncation strategy to use for the input */
    truncationStrategy?: MixedbreadAI.TruncationStrategy;
}
