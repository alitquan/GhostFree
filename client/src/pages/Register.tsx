import React, { useState, useContext } from "react";
import styles from  '@styles/Home.module.css';
import config from '@utils/config.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const attemptRegister = async() => {

		try {
			const URI = config.API_BASE_URL + "/register";
			console.log(URI);

			if (!username || !password || !email || !cpassword) { 
				setError("Please fill out all fields to register.");
				return; 
			}

			if (password != cpassword) {
				setError("Passwords do not match.");
				return;
			} 

			if (username.length < 3) {
				setError("Username must be at least 3 characters long");
				console.log(username);
				return;
			} 


			if (password.length < 8) {
				setError("Password must be at least 8 characters long");
				return; 
			} 

			const response = await axios.post(URI, {
				username,
				password,
				email
			});

			const token = response.data.token;
			console.log(response);	
			console.log(`Token: ${token}`); 
			console.log("attemptRegister --");
			setError('');
			sessionStorage.setItem('authToken', token);
  
			// Redirect to homepage
	        navigate('/'); 
		}
		catch (err) {
			console.log(err.response);
			setError(err.response?.data || 'Registration failed');
		}
	}


	return(
		<> 
			<div className={styles.containerLogin}>

				

				<div className={`.container ${styles.register}`}>


					<div className={styles.registerHeading}> 
						<h2> Register </h2> 
						<h3> One step away from a Ghost-Free experience!! </h3> 
					</div> 

					<div className={styles.registerField}> 
						<p> Username </p>  
						<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
					</div> 

					<div className={styles.registerField}> 
						<p> Password </p>  
						<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
					</div>	

					<div className={styles.registerField}> 
						<p> Confirm Password </p>  
						<input type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
					</div>


					<div className={styles.registerField}> 
						<p> E-Mail Address</p>  
						<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
					</div>

					<div className={styles.authError}> 
						{error && <p> {error}</p>}
					</div>

					<div className={styles.registerButton}> 
						<button className={styles.loginButton} onClick={attemptRegister}> 
							Register
						</button>
					</div>

				</div> 


			</div> 
		</>
	);
} 

export default Register;
