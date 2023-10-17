import ChatWindow from "@/components/sections/chatWindow";

export default function Home() {
	return (
		<>
			<ChatWindow endpoint="/api/chat" />
		</>
	);
}
