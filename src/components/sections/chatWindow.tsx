"use client";
import ChatMessage from "./chatMessage";
import ChatBar from "./chatBar";
import { useChat } from "ai/react";
import type { FormEvent } from "react";
import React, { useRef, useState } from "react";

interface ChatWindowProps {
	endpoint: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ endpoint }) => {
	const messageContainerRef = useRef(null);

	const [sourcesForMessages, setSourcesForMessages] = useState({});

	const {
		messages,
		input,
		setInput,
		handleInputChange,
		handleSubmit,
		isLoading,
	} = useChat({
		api: endpoint,
		onResponse(response) {
			const sourcesHeader = response.headers.get("x-sources");
			const sources = sourcesHeader
				? JSON.parse(atob(sourcesHeader))
				: [];
			const messageIndexHeader = response.headers.get("x-message-index");
			if (sources.length && messageIndexHeader !== null) {
				setSourcesForMessages({
					...sourcesForMessages,
					[messageIndexHeader]: sources,
				});
			}
		},
		onError: (e) => {
			console.error(e);
		},
	});

	async function sendMessage(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (isLoading) {
			return;
		}

		handleSubmit(e);
		setInput("");
	}

	return (
		<>
			<div className="flex flex-col gap-2 border-slate-300 border-2 rounded-md h-5/6 mx-5 p-4">
				{messages.length > 0
					? [...messages].map((m, i) => {
							const sourceKey = (
								messages.length -
								1 -
								i
							).toString();
							return (
								<ChatMessage
									key={m.id}
									message={m}
									sources={
										sourcesForMessages[
											sourceKey as keyof typeof sourcesForMessages
										]
									}
								/>
							);
					  })
					: ""}
			</div>
			<ChatBar
				input={input}
				handleInputChange={handleInputChange}
				handleSubmit={sendMessage}
				isLoading={isLoading}
			/>
		</>
	);
};

export default ChatWindow;
