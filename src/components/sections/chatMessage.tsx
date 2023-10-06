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
			className={
				message.role === "system"
					? "bg-sky-500/50 p-4"
					: "bg-sky-200/50 p-4"
			}
		>
			<p>{message.text}</p>
		</div>
	);
};

export default ChatMessage;
