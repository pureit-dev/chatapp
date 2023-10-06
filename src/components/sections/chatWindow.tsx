import React from 'react';

interface ChatWindowProps {
    messages: string[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
    );
};

export default ChatWindow;
