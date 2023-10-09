import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
		<div className="flex justify-center my-5 ">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-row w-screen max-w-screen-lg px-5 space-x-3">
					<Input
						className="shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-slate-300 border-2 rounded-md"
						type="text"
						placeholder="Type a message..."
						value={input}
						onChange={handleInputChange}
						autoFocus
					/>
					<Button type="submit">
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
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ChatBar;
