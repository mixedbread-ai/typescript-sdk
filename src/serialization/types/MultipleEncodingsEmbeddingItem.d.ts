/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";
export declare const MultipleEncodingsEmbeddingItem: core.serialization.ObjectSchema<serializers.MultipleEncodingsEmbeddingItem.Raw, MixedbreadAI.MultipleEncodingsEmbeddingItem>;
export declare namespace MultipleEncodingsEmbeddingItem {
    interface Raw {
        base64: string[];
        binary: number[];
        float: number[];
        int8: number[];
        ubinary: number[];
        uint8: number[];
    }
}
