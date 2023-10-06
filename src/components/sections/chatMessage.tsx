import React from "react";

interface ChatMessageProps {
	message: {
		text: string;
		sender: string;
		timestamp: string;
	};
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
	return <h1>Message</h1>;
};

export default ChatMessage;
