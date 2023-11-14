import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const resource = 'gpt4-pureitdev';
const model = 'gpt-4-32k';
const apiKey = process.env.AZURE_OPENAI_API_KEY;

if (!apiKey) {
	throw new Error('AZURE_OPENAI_API_KEY is missing from the environment.');
  }
   // https://gpt4-pureitdev.openai.azure.com/openai/deployments/gpt-4-32k/chat/completions?api-version=2023-07-01-preview
  // Azure OpenAI requires a custom baseURL, api-version query param, and api-key header.
  const openai = new OpenAI({
	apiKey,
	baseURL: `https://${resource}.openai.azure.com/openai/deployments/${model}`,
	defaultQuery: { 'api-version': '2023-07-01-preview' },
	defaultHeaders: { 'api-key': apiKey },
  });

export async function POST(req: Request) {
	// Extract the `messages` from the body of the request
	const { messages } = await req.json();

	// Request the OpenAI API for the response based on the prompt
	const response = await openai.chat.completions.create({
		model,
		stream: true,
		messages: messages,
	});

	// Convert the response into a friendly text-stream
	const stream = OpenAIStream(response);

	// Respond with the stream
	return new StreamingTextResponse(stream);
}
