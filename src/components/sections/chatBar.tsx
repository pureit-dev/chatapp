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
						className="shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-slate-300 border-2 rounded-md flex-grow"
						type="text"
						placeholder="Type a message..."
						value={input}
						onChange={handleInputChange}
						autoFocus
					/>
					<button
						type="submit"
						className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
