import React from "react";
import ModeToggle from "./modeToogle";
import { metadata } from "@/app/layout";

const Header = () => {
	const { title } = metadata as { title: string };
	return (
		<header className="flex justify-between items-center p-5 bg-noir-accent text-noir-text">
			<h1 className="text-2xl font-bold text-center">
				{title}
			</h1>
			<div className="flex gap-2">
				<ModeToggle />
				
			</div>
		</header>
	);
};

export default Header;

