import React, { useState, useContext } from "react";
import styles from  '@styles/Home.module.css';


function Login  ({onLogin}) {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const attemptLogin = async () => {
		try { 
			const response = await axios.posst('https://localhost:5000/login', {
				username,
				password,
			});
			localStorage.setItem('token', response.data.token);
			onLogin();
			console.log("attemptLogin() -- completed");
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


				<div> 
					{error && <p className={styles.loginError}>{error}</p>}
				</div>


				<button className={styles.loginButton} onClick={attemptLogin}> Sign In </button> 

				</div>
			</div>
			 


		</>
	);
} 

export default Login;
