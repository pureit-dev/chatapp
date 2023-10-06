"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader, SendHorizontal } from "lucide-react";

const ChatBar: React.FC = () => {
	const [inputValue, setInputValue] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		console.log(inputValue);
		setInterval(() => {
			setLoading(false);
		}, 3000);
		setInputValue("");
	};

	return (
		<div className="flex justify-center my-5 ">
			<form onSubmit={handleFormSubmit}>
				<div className="flex flex-row w-screen max-w-screen-lg px-5 space-x-3">
					<Input
						className="shadow-md focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-slate-300 border-2 rounded-md"
						type="text"
						placeholder="Type a message..."
						value={inputValue}
						onChange={handleInputChange}
					/>
					<Button type="submit">
						{loading ? (
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
