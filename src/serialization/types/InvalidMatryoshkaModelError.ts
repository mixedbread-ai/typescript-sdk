/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as MixedbreadAI from "../../api/index";
import * as core from "../../core";
import { MxbaiApiErrorDetails } from "./MxbaiApiErrorDetails";

export const InvalidMatryoshkaModelError: core.serialization.ObjectSchema<
    serializers.InvalidMatryoshkaModelError.Raw,
    MixedbreadAI.InvalidMatryoshkaModelError
> = core.serialization.object({
    type: core.serialization.stringLiteral("invalid_matryoshka_model_error").optional(),
    url: core.serialization.string().optional(),
    message: core.serialization.string().optional(),
    details: MxbaiApiErrorDetails.optional(),
});

export declare namespace InvalidMatryoshkaModelError {
    interface Raw {
        type?: "invalid_matryoshka_model_error" | null;
        url?: string | null;
        message?: string | null;
        details?: MxbaiApiErrorDetails.Raw | null;
    }
}
