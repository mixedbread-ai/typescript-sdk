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
import { Embeddings200ResponseDataInnerFromJSON, Embeddings200ResponseDataInnerToJSON, } from './Embeddings200ResponseDataInner';
import { Embeddings200ResponseUsageFromJSON, Embeddings200ResponseUsageToJSON, } from './Embeddings200ResponseUsage';
/**
 * Check if a given object implements the Embeddings200Response interface.
 */
export function instanceOfEmbeddings200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "usage" in value;
    return isInstance;
}
export function Embeddings200ResponseFromJSON(json) {
    return Embeddings200ResponseFromJSONTyped(json, false);
}
export function Embeddings200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'model': json['model'],
        'data': (json['data'].map(Embeddings200ResponseDataInnerFromJSON)),
        'usage': Embeddings200ResponseUsageFromJSON(json['usage']),
    };
}
export function Embeddings200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'model': value.model,
        'data': (value.data.map(Embeddings200ResponseDataInnerToJSON)),
        'usage': Embeddings200ResponseUsageToJSON(value.usage),
    };
}
