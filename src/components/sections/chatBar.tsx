import { Loader, SendHorizontal } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";

interface ChatBarProps {
	input: string;
	isLoading: boolean;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const ChatBar: React.FC<ChatBarProps> = ({
	input,
	handleInputChange,
	handleSubmit,
	isLoading,
}) => {
	return (
		<div className="flex justify-center my-5 w-full">
			<form onSubmit={handleSubmit} className="w-full">
				<div className="flex flex-row w-full px-5 space-x-3">
					<input
						className="shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-slate-300 border-2 rounded-noir flex-grow bg-noir-bg text-noir-text border-noir-border"
						type="text"
						placeholder="Type a message..."
						value={input}
						onChange={handleInputChange}
						autoFocus
					/>
					<button
						type="submit"
						className="rounded-noir bg-noir-accent px-2 py-1 text-xs font-semibold text-noir-text shadow-sm hover:bg-opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-noir-accent"
					>
						{isLoading ? (
							<svg
								className="animate-spin h-5 w-6"
								viewBox="0 0 24 24"
							>
								<Loader />
							</svg>
						) : (
							<SendHorizontal />
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ChatBar;

