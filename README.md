# mixedbread.ai TypeScript SDK

## Introduction to mixedbread.ai
mixedbread.ai is a cutting-edge research and development company specializing in Natural Language Processing (NLP). At our core, we focus on advancing the field of NLP through innovative research, offering powerful tools for embeddings, retrieval, and other NLP functionalities. Our mission is to make NLP accessible to everyone on every device. To learn more about mixedbread.ai, visit our [website](https://mixedbread.ai/).

## Installation and Setup

To start using the mixedbread.ai SDK in your project, install it via npm (Node Package Manager). Ensure Node.js is installed in your environment beforehand.

### Installation

Run the following command in your project directory to install the SDK:

```bash
npm install @mixedbread-ai/sdk --save
```

## Usage Example

Here's an example of using the mixedbread.ai SDK to create embeddings:

```typescript
import { MixedbreadAi } from "@mixedbread-ai/sdk";

process.env.MIXEDBREADAI_API_KEY="{YOUR_API_KEY}"

const mxbai = new MixedbreadAi();
const embeddings = await client.embeddings({
    input: "Hello world!",
    model: "e5-large-v2"
})

console.log(embeddings)
```

Replace `"{YOUR_API_KEY}"` with your actual API key. If you don't hav e an API key, you can get one for free by signing up for an account at [mixedbread.ai](https://mixedbread.ai/).

## Configuration

The mixedbread.ai SDK can be configured by passing an object to the constructor. Here is a full example:
    
```typescript
import { MixedbreadAi, ResponseError } from "@mixedbread-ai/sdk";

const mxbai = new MixedbreadAi({
    apiKey: "{YOUR_API_KEY}",
    basePath: "https://api.mixedbread.ai",
    headers: {
        "X_CUSTOM_HEADER": "custom header value"
    },
    middleware: [
        {
            // Pre request
            pre: async (context) => {
                console.log("pre", context);
            },
            // Post request
            post: async (context) => {
                console.log("post", context);
            },
            // onError is triggered, when actually an error occurs. Response errors are not handled here.
            onError(context) {
                console.log("onError", context.init);
                return Promise.resolve();
            }
        }
    ],
    // custom fetch implementation
    // fetch: ...
    // custom query string implementation
    // queryString: ...
});

const result = await mxbai.embeddings({
    input: ["Hello world!"],
    model: "e5-large-v2",
}, {
    // custom request overrides
    // method: "POST" etc.
}).catch((err: ResponseError) => {
    if (err.name === "ResponseError") {
        console.log(err.message)
    }
});

console.log(result)
```
