import React from "react";
import type { Message } from "ai/react";
import Image from "next/image";
import Bob from "@/assets/Bob.jpg";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/codeblock";
import { MemoizedReactMarkdown } from "@/components/markdown";

interface ChatMessageProps {
	message: Message;
	sources: any[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sources }) => {
	return (
		<div
			className={`flex gap-5 p-4 bg-sky-200/50 items-top rounded-lg ${
				message.role === "assistant" ? "bg-sky-500/50" : ""
			} rounded-md`} // Added `rounded-md` for rounded edges
		>
			<div>
				{message.role === "assistant" ? (
					<Image
						className="border-2 border-slate-500 rounded-full"
						src={Bob}
						alt="Avatar of BobBot"
						width={40}
						height={40}
					/>
				) : (
					<p className="border-2 p-3 border-slate-500 rounded-full">
						{message.role.slice(0, 1).toUpperCase()}
					</p>
				)}
			</div>
			<div className="w-5/6">

			<MemoizedReactMarkdown
				className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
				remarkPlugins={[remarkGfm, remarkMath]}
				components={{
					p({ children }) {
						return <p className="mb-2 last:mb-0">{children}</p>;
					},
					code({ node, inline, className, children, ...props }) {


						const match = /language-(\w+)/.exec(className || "");

						if (inline) {
							return (
								<code className={className} {...props}>
									{children}
								</code>
							);
						}

						return (
							<CodeBlock
								key={Math.random()}
								language={(match && match[1]) || ""}
								value={String(children).replace(/\n$/, "")}
								{...props}
							/>
						);
					},
				}}
			>
				{message.content}
			</MemoizedReactMarkdown>
		</div>
		</div>
	);
};

export default ChatMessage;


