"use client";

import { Box, Button, Stack, TextField } from "@mui/material" 
import { useState, useEffect} from "react" 
import Image from "next/image";
import styles from '@styles/ChatPage.module.css';

export default function Chat() {

	const [messages, setMessages] = useState([
		{
			role: "bot",
			body: "Hi, how can I help you today?", 
		},
	]);

	const [message, setMessage] = useState("");

	const sendMessage = async () => {
		setMessages( (messages) => [
			...messages,
			{ role: "user", body: message },
			{ role: "bot", body: ""},  
		]);
		setMessage("");
	} 


	// Effect to log messages whenever they change
	useEffect(() => {
		console.log("Messages:", messages);
	}, [messages]); // Run this effect whenever messages change

	return (
		<Box 
			width="100vw"
			height="100vh"
			display="flex"
			flexDirection="column" 
			justifyContent="center"
			alignItems="center"
		>

			<Stack
				direction="column"
				width="45vw"
				height="80vh"
				border="1px solid black"
				p={2}
				spacing={5}
				border="1px solid var(--color3)"
				borderRadius="16px"
			>
				Outer Stack
				<Stack
					direction="column"
					spacing={5}
					flexGrow={1}
					m={3}
					overflow="auto"
					maxHeight="100%"
					border="1px solid var(--color3)"
				>
					<div>
						{messages.map ((message,index) => (
							<div key={index} className={message.role === 'user' ? styles.containerMsgUser : styles.containerMsgBot}>

								<div key={index} className={message.role === 'user' ? styles.msgUser : styles.msgBot}>
									{message.body} 
								</div>
							</div>
						))
						}
					</div>
				</Stack> 
				<Stack direction="row" spacing={2}>
					<TextField
						
						label="message"
						fullWidth
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "var(--color3)", // Change border color here
								},
								"&:hover fieldset": {
									borderColor: "var(--color4)", // Change border color on hover
								},
								"&.Mui-focused fieldset": {
									borderColor: "skyblue", // Change border color when focused
								},
							},
						}}
					/>
					<Button variant="contained" onClick={sendMessage}>
						Send
					</Button>
				</Stack>


			</Stack>

		</Box> 

	);
}
