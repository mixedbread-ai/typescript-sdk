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
import type { EmbeddingsResponseDataInner } from './EmbeddingsResponseDataInner';
import {
    EmbeddingsResponseDataInnerFromJSON,
    EmbeddingsResponseDataInnerFromJSONTyped,
    EmbeddingsResponseDataInnerToJSON,
} from './EmbeddingsResponseDataInner';
import type { ModelBaseResponseUsage } from './ModelBaseResponseUsage';
import {
    ModelBaseResponseUsageFromJSON,
    ModelBaseResponseUsageFromJSONTyped,
    ModelBaseResponseUsageToJSON,
} from './ModelBaseResponseUsage';

/**
 * 
 * @export
 * @interface EmbeddingsResponse
 */
export interface EmbeddingsResponse {
    /**
     * Indicates if the embeddings were normalized.
     * @type {boolean}
     * @memberof EmbeddingsResponse
     */
    normalized: boolean;
    /**
     * 
     * @type {Array<EmbeddingsResponseDataInner>}
     * @memberof EmbeddingsResponse
     */
    data: Array<EmbeddingsResponseDataInner>;
    /**
     * The embeddings model used.
     * @type {string}
     * @memberof EmbeddingsResponse
     */
    model: string;
    /**
     * 
     * @type {ModelBaseResponseUsage}
     * @memberof EmbeddingsResponse
     */
    usage: ModelBaseResponseUsage;
}

/**
 * Check if a given object implements the EmbeddingsResponse interface.
 */
export function instanceOfEmbeddingsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "normalized" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "usage" in value;

    return isInstance;
}

export function EmbeddingsResponseFromJSON(json: any): EmbeddingsResponse {
    return EmbeddingsResponseFromJSONTyped(json, false);
}

export function EmbeddingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'normalized': json['normalized'],
        'data': ((json['data'] as Array<any>).map(EmbeddingsResponseDataInnerFromJSON)),
        'model': json['model'],
        'usage': ModelBaseResponseUsageFromJSON(json['usage']),
    };
}

export function EmbeddingsResponseToJSON(value?: EmbeddingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'normalized': value.normalized,
        'data': ((value.data as Array<any>).map(EmbeddingsResponseDataInnerToJSON)),
        'model': value.model,
        'usage': ModelBaseResponseUsageToJSON(value.usage),
    };
}

