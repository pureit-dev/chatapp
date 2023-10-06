import React from "react";
import SettingsMenu from "./SettingsMenu";

const Header:React.FC = () => {
	return (
		<header className="flex justify-between items-center p-5">
			<h1 className="text-2xl font-bold text-center">Chat App</h1>
			<SettingsMenu />
		</header>
	);
};

export default Header;
