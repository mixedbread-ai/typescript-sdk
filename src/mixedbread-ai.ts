import {EmbeddingsRequest as EmbeddingsRequestInternal, EmbeddingsResponse} from "./models";
import {MixedbreadAiApi} from "./apis";
import {BASE_PATH, Configuration} from "./runtime";
import {EmbeddingsRequest, MixedbreadAiConfig, RequestInitOverrides} from "./mixedbread-ai-types";
import packageJson from "../package.json";

const sdkVersion = packageJson.version;

export class MixedbreadAi {
    private client: MixedbreadAiApi;

    constructor({
                    basePath = BASE_PATH,
                    apiKey = process.env.MIXEDBREADAI_API_KEY,
                    ...config
                }: MixedbreadAiConfig = {}) {
        const cfg = new Configuration({
            ...config,
            headers: {
                "User-Agent": `@mixedbread-ai/typescript-sdk/${sdkVersion}`,
                ...config.headers
            },
            basePath,
            apiKey: (name) => {
                return `Bearer ${typeof apiKey === 'function' ? apiKey(name) : apiKey}`;
            },
        });

        this.client = new MixedbreadAiApi(cfg);
    }

    /**
     * @throws {ResponseError}
     */
    public embeddings = async (embeddingsRequest: EmbeddingsRequest, requestInitOverrides?: RequestInitOverrides): Promise<EmbeddingsResponse> => {
        if (typeof embeddingsRequest.input === 'string') {
            embeddingsRequest.input = [embeddingsRequest.input];
        }

        return await this.client.embeddings(embeddingsRequest as EmbeddingsRequestInternal, requestInitOverrides);
    }
}

export default MixedbreadAi;