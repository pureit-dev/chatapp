import React from "react";
import ModeToggle from "./modeToogle";
import { metadata } from "@/app/layout";

const Header = () => {
	const { title } = metadata as { title: string };
	return (
		<header className="flex justify-between items-center p-5">
            <div className="flex items-center gap-4">
                <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" alt="Company Logo" className="w-12 h-12" />
			    <h1 className="text-2xl font-bold text-center">
				    {title}
			    </h1>
            </div>
			<div className="flex gap-2">
				<ModeToggle />
				
			</div>
		</header>
	);
};

export default Header;

