/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";

export const UnauthorizedErrorBody: core.serialization.ObjectSchema<
    serializers.UnauthorizedErrorBody.Raw,
    MixedbreadAI.UnauthorizedErrorBody
> = core.serialization.object({
    type: core.serialization.stringLiteral("unauthorized_error").optional(),
    url: core.serialization.string().optional(),
    message: core.serialization.string().optional(),
    details: core.serialization.lazy(async () => (await import("..")).MxbaiApiErrorDetails).optional(),
});

export declare namespace UnauthorizedErrorBody {
    interface Raw {
        type?: "unauthorized_error" | null;
        url?: string | null;
        message?: string | null;
        details?: serializers.MxbaiApiErrorDetails.Raw | null;
    }
}