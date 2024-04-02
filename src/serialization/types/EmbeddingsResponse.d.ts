/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";
export declare const EmbeddingsResponse: core.serialization.ObjectSchema<serializers.EmbeddingsResponse.Raw, MixedbreadAI.EmbeddingsResponse>;
export declare namespace EmbeddingsResponse {
    interface Raw {
        data: serializers.Data.Raw;
        dimensions?: number | null;
        encoding_format: serializers.EmbeddingsResponseEncodingFormat.Raw;
        model: string;
        normalized: boolean;
        object?: serializers.ObjectType.Raw | null;
        usage: serializers.Usage.Raw;
    }
}
