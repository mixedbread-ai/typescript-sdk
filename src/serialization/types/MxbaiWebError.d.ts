/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as MixedbreadAiApi from "../../api";
import * as core from "../../core";
export declare const MxbaiWebError: core.serialization.ObjectSchema<serializers.MxbaiWebError.Raw, MixedbreadAiApi.MxbaiWebError>;
export declare namespace MxbaiWebError {
    interface Raw {
        type?: string | null;
        url?: string | null;
        message?: string | null;
        details?: serializers.MxbaiWebErrorDetails.Raw | null;
    }
}
