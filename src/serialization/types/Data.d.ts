/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";
export declare const Data: core.serialization.Schema<serializers.Data.Raw, MixedbreadAI.Data>;
export declare namespace Data {
    type Raw = serializers.Embedding.Raw[] | serializers.MultipleEncodingsEmbedding.Raw[];
}