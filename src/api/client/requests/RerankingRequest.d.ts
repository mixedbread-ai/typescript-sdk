/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as MixedbreadAiApi from "../..";
/**
 * @example
 *     {
 *         model: "model",
 *         input: [{
 *                 text: "text"
 *             }],
 *         query: {
 *             text: "text"
 *         },
 *         topK: 10,
 *         returnInput: false
 *     }
 */
export interface RerankingRequest {
    /** The model to use for creating embeddings */
    model: string;
    /** The input documents to rerank */
    input: MixedbreadAiApi.TextDocument[];
    /** The query to rerank the documents */
    query: MixedbreadAiApi.TextDocument;
    /** The number of documents to return */
    topK?: number;
    /** Whether to return the documents */
    returnInput?: boolean;
}
