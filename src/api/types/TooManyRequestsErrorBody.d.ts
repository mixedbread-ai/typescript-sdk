/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as MixedbreadAiApi from "..";
export interface TooManyRequestsErrorBody {
    type?: "too_many_requests_error";
    url?: string;
    message?: string;
    details?: MixedbreadAiApi.MxbaiWebErrorDetails;
}
