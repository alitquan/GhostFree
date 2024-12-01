import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '@styles/Home.module.css'
import Navbar from '@components/Navbar.tsx'
import Headline from '@components/Headline.tsx'
import Features from '@components/Features.tsx'
import Footer from '@components/Footer.tsx' 
import { jwtDecode } from 'jwt-decode';


export default function Home () {
	useEffect(() => {
		const token = sessionStorage.getItem('authToken');
		if (token) { 
			try {
				console.log("Token output:"); 
				const userInfo = jwtDecode(token); // Decode the token
				console.log(`User Info:`, userInfo);
			} catch (error) {
				console.error("Failed to decode token:", error);
			}
		}
		else {
			console.log("No token found");
		} 
	}, []);

	return (
		<div className={`${styles.base} ${styles.container}`} > 
  			<Navbar />	
			<Headline />
			<Features />
			<Footer /> 
		</div> 

	)
}
