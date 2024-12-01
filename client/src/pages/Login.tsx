import React, { useState, useContext } from "react";
import styles from  '@styles/Home.module.css';
import config from '@utils/config.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login  ({onLogin}) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate(); 

	const attemptLogin = async () => {
		try { 
			const URI = config.API_BASE_URL + "/login";

			const response = await axios.post(URI , {
				username,
				password,
			});
			console.log("attemptLogin() -- response received :");
			console.log(response);
			sessionStorage.setItem('authToken', response.data.token);
			onLogin(response.data.token);
			console.log("attemptLogin() -- completed");
			navigate("/");
		} catch (err) {
			console.log(err);
			setError(err.response?.data || 'Login failed'); 
		}
	}


	return(
		<>
			<div className={styles.containerLogin}>
				<div className={`.container ${styles.signin}`}>
				<h3>Login </h3> 

				<div className={styles.signInField}>
					<p> Username </p> 
					<input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
				</div>

				<div className={styles.signInField}>
					<p> Password </p> 
					<input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
				</div>

				<div className={styles.authError}> 
					{error && <p> {error}</p>}
				</div>

				<button className={styles.loginButton} onClick={attemptLogin}> Sign In </button> 

				</div>
			</div>


			
			 


		</>
	);
} 

export default Login;
