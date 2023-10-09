import React from "react";

interface ChatMessageProps {
	message: {
		text: string;
		role: string;
	};
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	return (
		<div
			className={`flex gap-5 p-4 bg-sky-200/50 items-center ${
				message.role === "system" ? "bg-sky-500/50" : ""
			}`}
		>
			<div>
				<p className="border-2 px-3 py-1 rounded-full border-slate-300">{message.role.slice(0, 1).toUpperCase()}</p>
			</div>
			<p>{message.text}</p>
		</div>
	);
};

export default ChatMessage;
