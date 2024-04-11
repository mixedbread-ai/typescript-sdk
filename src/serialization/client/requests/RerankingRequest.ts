/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import * as MixedbreadAI from "../../../api";
import * as core from "../../../core";

export const RerankingRequest: core.serialization.Schema<
    serializers.RerankingRequest.Raw,
    MixedbreadAI.RerankingRequest
> = core.serialization.object({
    model: core.serialization.string(),
    query: core.serialization.lazy(async () => (await import("../..")).Query),
    input: core.serialization.lazy(async () => (await import("../..")).MultiModalRerankingInput),
    rankFields: core.serialization.property(
        "rank_fields",
        core.serialization.list(core.serialization.string()).optional()
    ),
    topK: core.serialization.property("top_k", core.serialization.number().optional()),
    returnInput: core.serialization.property("return_input", core.serialization.boolean().optional()),
});

export declare namespace RerankingRequest {
    interface Raw {
        model: string;
        query: serializers.Query.Raw;
        input: serializers.MultiModalRerankingInput.Raw;
        rank_fields?: string[] | null;
        top_k?: number | null;
        return_input?: boolean | null;
    }
}
