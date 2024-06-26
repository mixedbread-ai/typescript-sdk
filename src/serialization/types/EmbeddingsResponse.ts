/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";
import { Usage } from "./Usage";
import { Data } from "./Data";
import { ObjectType } from "./ObjectType";
import { EmbeddingsResponseEncodingFormat } from "./EmbeddingsResponseEncodingFormat";

export const EmbeddingsResponse: core.serialization.ObjectSchema<
    serializers.EmbeddingsResponse.Raw,
    MixedbreadAI.EmbeddingsResponse
> = core.serialization.object({
    usage: Usage,
    model: core.serialization.string(),
    data: Data,
    object: ObjectType.optional(),
    normalized: core.serialization.boolean(),
    encodingFormat: core.serialization.property("encoding_format", EmbeddingsResponseEncodingFormat),
    dimensions: core.serialization.number().optional(),
});

export declare namespace EmbeddingsResponse {
    interface Raw {
        usage: Usage.Raw;
        model: string;
        data: Data.Raw;
        object?: ObjectType.Raw | null;
        normalized: boolean;
        encoding_format: EmbeddingsResponseEncodingFormat.Raw;
        dimensions?: number | null;
    }
}
