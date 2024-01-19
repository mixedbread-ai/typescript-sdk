import {ConfigurationParameters, FetchError, RequiredError, ResponseError as ResponseErrorInternal} from "./runtime";
import {MixedbreadAiApiInterface} from "./apis";
import {
    EmbeddingsRequest as EmbeddingsRequestInternal,
} from "./models";

export interface MixedbreadAiConfig extends Omit<ConfigurationParameters, "username" | "password" | "accessToken" | "credentials"> {}

export type RequestInitOverrides =  Parameters<MixedbreadAiApiInterface["embeddings"]>[1];


export interface EmbeddingsRequest extends Omit<EmbeddingsRequestInternal, "input"> {
    input: string[] | string;
}

export type ResponseError = ResponseErrorInternal | FetchError | RequiredError;