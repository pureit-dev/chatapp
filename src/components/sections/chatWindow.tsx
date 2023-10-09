import React from "react";
import ChatMessage from "./chatMessage";
interface ChatWindowProps {
	messages: string[];
}

// const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
const ChatWindow: React.FC = () => {
	let messages = [
		{
			text: "Welcome to the chat app!  How can I assist you today?",
			role: "system",
		},
		{ text: "I need assistance with writing a poem", role: "human" },
	];
	return (
		<div className="flex flex-col gap-2 border-slate-300 border-2 rounded-md h-5/6 mx-5 p-4">
			{messages.map((message, index) => (
				<ChatMessage key={index} message={message} />
			))}
		</div>
	);
};

export default ChatWindow;
