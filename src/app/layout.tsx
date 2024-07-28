import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bob Bot",
	description: "Bob Bot Chat App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="box-border flex flex-col h-screen max-w-screen-lg justify-between my-0 mx-auto bg-noir-bg text-noir-text">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

