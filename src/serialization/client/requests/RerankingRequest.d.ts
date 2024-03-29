/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../..";
import * as MixedbreadAiApi from "../../../api";
import * as core from "../../../core";
export declare const RerankingRequest: core.serialization.Schema<serializers.RerankingRequest.Raw, MixedbreadAiApi.RerankingRequest>;
export declare namespace RerankingRequest {
    interface Raw {
        model: string;
        input: serializers.TextDocument.Raw[];
        query: serializers.TextDocument.Raw;
        top_k?: number | null;
        return_input?: boolean | null;
    }
}
