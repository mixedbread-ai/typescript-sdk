/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelBaseResponseUsage
 */
export interface ModelBaseResponseUsage {
    /**
     * The number of prompt tokens used.
     * @type {number}
     * @memberof ModelBaseResponseUsage
     */
    promptTokens: number;
    /**
     * The total number of tokens used.
     * @type {number}
     * @memberof ModelBaseResponseUsage
     */
    totalTokens: number;
    /**
     * The number of completion tokens used.
     * @type {number}
     * @memberof ModelBaseResponseUsage
     */
    completionTokens?: number;
}

/**
 * Check if a given object implements the ModelBaseResponseUsage interface.
 */
export function instanceOfModelBaseResponseUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "promptTokens" in value;
    isInstance = isInstance && "totalTokens" in value;

    return isInstance;
}

export function ModelBaseResponseUsageFromJSON(json: any): ModelBaseResponseUsage {
    return ModelBaseResponseUsageFromJSONTyped(json, false);
}

export function ModelBaseResponseUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelBaseResponseUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'promptTokens': json['prompt_tokens'],
        'totalTokens': json['total_tokens'],
        'completionTokens': !exists(json, 'completion_tokens') ? undefined : json['completion_tokens'],
    };
}

export function ModelBaseResponseUsageToJSON(value?: ModelBaseResponseUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prompt_tokens': value.promptTokens,
        'total_tokens': value.totalTokens,
        'completion_tokens': value.completionTokens,
    };
}
