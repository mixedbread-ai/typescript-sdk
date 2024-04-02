/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as MixedbreadAI from "../../api";
import * as core from "../../core";
export declare const BadRequestErrorBody: core.serialization.ObjectSchema<serializers.BadRequestErrorBody.Raw, MixedbreadAI.BadRequestErrorBody>;
export declare namespace BadRequestErrorBody {
    interface Raw {
        type?: "bad_request_error" | null;
        details?: serializers.MxbaiWebErrorDetails.Raw | null;
        message?: string | null;
        url?: string | null;
    }
}