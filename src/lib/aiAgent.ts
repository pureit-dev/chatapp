import { config } from "dotenv";
config();

import { ChatOpenAI } from "langchain/chat_models/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";

process.env.LANGCHAIN_HANDLER = "langchain";
const model = new ChatOpenAI({ openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, temperature: 0 });
const tools = [new Calculator()];

const agentExecutor = async (humanMessage: string) => {
	const executor = await initializeAgentExecutorWithOptions(tools, model, {
		agentType: "chat-conversational-react-description",
		verbose: true,
	});

	const result = await executor.call({ input: humanMessage });
	return result.output;
};

export default agentExecutor;
