/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as MixedbreadAI from "..";
export interface WebTruncationError {
    type?: "truncation_error";
    details?: MixedbreadAI.MxbaiWebErrorDetails;
    message?: string;
    url?: string;
}