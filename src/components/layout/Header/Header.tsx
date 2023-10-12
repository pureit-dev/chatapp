import React from "react";
import SettingsMenu from "./SettingsMenu";
import { ModeToggle } from "./modeToogle";
import { metadata } from "@/app/layout";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center p-5">
			<h1 className="text-2xl font-bold text-center">
				<React.Fragment>{metadata.title}</React.Fragment>
			</h1>
			<div className="flex gap-2">
				<ModeToggle />
				<SettingsMenu />
			</div>
		</header>
	);
};

export default Header;
