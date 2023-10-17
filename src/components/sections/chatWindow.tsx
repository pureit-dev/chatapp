"use client";
import ChatMessage from "./chatMessage";
import ChatBar from "./chatBar";
import { useChat, Message } from "ai/react";
import type { FormEvent } from "react";
import React, { useRef, useState, useEffect } from "react";

interface ChatWindowProps {
	endpoint: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ endpoint }) => {
	const messageContainerRef = useRef<HTMLDivElement>(null);

	const [sourcesForMessages, setSourcesForMessages] = useState({});
	const initialMessage: Message[] = [
		{
			content: "Hello, I'm Bob Bot!  How can I help you?",
			role: "assistant",
			id: "0",
		},
	];

	
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
		initialMessages: initialMessage,
		onError: (e) => {
			console.error(e);
		},
	});

	useEffect(() => {
		if (messageContainerRef.current) {
			const scrollHeight = messageContainerRef.current.scrollHeight;
			messageContainerRef.current.scrollTop = scrollHeight;
		}
	}, [messages]);

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
			<div
				ref={messageContainerRef}
				className="flex flex-col gap-2 border-slate-300 border-2 rounded-md h-5/6 mx-5 p-4 overflow-auto"
			>
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
