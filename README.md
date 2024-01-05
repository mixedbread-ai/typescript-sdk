# mixedbread ai TypeScript SDK

## Introduction to mixedbread ai
mixedbread ai is a cutting-edge research and development company specializing in Natural Language Processing (NLP). At our core, we focus on advancing the field of NLP through innovative research, offering powerful tools for embeddings, retrieval, and other NLP functionalities. Our mission is to make NLP accessible to everyone on every device. To learn more about mixedbread ai, visit our [website](https://mixedbread.ai/).

## Installation and Setup

To start using the mixedbread ai SDK in your project, install it via npm (Node Package Manager). Ensure Node.js is installed in your environment beforehand.

### Installation

Run the following command in your project directory to install the SDK:

```bash
npm install @mixedbread-ai/sdk --save
```

## Usage Example

Here's an example of using the mixedbread ai SDK to create embeddings:

```typescript
import { MixedbreadAiApi, Configuration, EmbeddingsRequest } from "@mixedbread-ai/sdk";

process.env.MIXEDBREADAI_API_KEY="{YOUR_API_KEY}"

const client = new MixedbreadAiApi();
const embeddings = await client.embeddings({
    texts: ["Hello world!"],
    model: "e5-large-v2"
})

console.log(embeddings)
```

Replace `"{YOUR_API_KEY}"` with your actual API key. If you don't hav e an API key, you can get one for free by signing up for an account at [mixedbread.ai](https://mixedbread.ai/).