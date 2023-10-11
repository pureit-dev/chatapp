import React from "react";
import type { Message } from "ai/react";
import Image from "next/image";
import Bob from "@/assets/Bob.jpg";

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
				{message.role === "assistant" ? (
					<Image
						className="border-2 rounded-full border-slate-500"
						src={Bob}
						alt="Avatar of BobBot"
						width={40}
					/>
				) : (
					<p className="border-2 px-2 py-0.5 rounded-full border-slate-500">
						{message.role.slice(0, 1).toUpperCase()}
					</p>
				)}
			</div>
			<p>{message.content}</p>
		</div>
	);
};

export default ChatMessage;
