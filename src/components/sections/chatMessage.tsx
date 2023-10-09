import React from "react";
import type { Message } from "ai/react";

interface ChatMessageProps {
	message: Message;
	sources: any[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sources }) => {
	return (
		<div
			className={`flex gap-5 p-4 bg-sky-200/50 items-top ${
				message.role === "assistant" ? "bg-sky-500/50" : ""
			}`}
		>
			<div>
				<p className="border-2 px-3 py-1 rounded-full border-slate-300">
					{message.role.slice(0, 1).toUpperCase()}
				</p>
			</div>
			<p>{message.content}</p>
		</div>
	);
};

export default ChatMessage;
