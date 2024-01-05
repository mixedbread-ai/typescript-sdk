/**
 * mixedbread-ai
 * Discover how to convert text into embeddings with the Embeddings API. Ideal for NLP tasks like text similarity and clustering. Use top open source models or your own fine-tuned models.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     *
     * @type {number}
     * @memberof ErrorResponse
     */
    code: number;
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    message: string;
    /**
     *
     * @type {{ [key: string]: any; }}
     * @memberof ErrorResponse
     */
    data: {
        [key: string]: any;
    };
}
/**
 * Check if a given object implements the ErrorResponse interface.
 */
export declare function instanceOfErrorResponse(value: object): boolean;
export declare function ErrorResponseFromJSON(json: any): ErrorResponse;
export declare function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse;
export declare function ErrorResponseToJSON(value?: ErrorResponse | null): any;
