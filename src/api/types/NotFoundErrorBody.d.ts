/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as MixedbreadAiApi from "..";
export interface NotFoundErrorBody {
    type?: "not_found_error";
    url?: string;
    message?: string;
    details?: MixedbreadAiApi.MxbaiWebErrorDetails;
}
