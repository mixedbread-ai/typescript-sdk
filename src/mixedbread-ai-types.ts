import {ConfigurationParameters, FetchError, RequiredError, ResponseError as ResponseErrorInternal} from "./runtime";
import {MixedbreadAiApiInterface} from "./apis";
import {
    EmbeddingsRequest as EmbeddingsRequestInternal,
    EmbeddingsResponse as EmbeddingsResponseInternal,
    EmbeddingsResponseDataInner, ModelBaseResponse
} from "./models";

export interface MixedbreadAiConfig extends Omit<ConfigurationParameters, "username" | "password" | "accessToken" | "credentials"> {}

export type RequestInitOverrides =  Parameters<MixedbreadAiApiInterface["embeddings"]>[1];

export type Embedding = EmbeddingsResponseDataInner;

export interface EmbeddingsRequest extends Omit<EmbeddingsRequestInternal, "input"> {
    input: string[] | string;
}
export interface EmbeddingsResponse extends Omit<EmbeddingsResponseInternal, "data"> {
    data: Embedding[];
}

export type BaseResponse = ModelBaseResponse;

export type ResponseError = ResponseErrorInternal | FetchError | RequiredError;