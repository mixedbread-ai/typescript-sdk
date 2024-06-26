/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";

export const EmbeddingItem: core.serialization.Schema<serializers.EmbeddingItem.Raw, MixedbreadAI.EmbeddingItem> =
    core.serialization.undiscriminatedUnion([
        core.serialization.list(core.serialization.number()),
        core.serialization.list(core.serialization.number()),
        core.serialization.string(),
    ]);

export declare namespace EmbeddingItem {
    type Raw = number[] | number[] | string;
}
