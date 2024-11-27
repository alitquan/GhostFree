import React, { useState, useContext } from "react";
import styles from  '@styles/Home.module.css';

const Register = () => {


	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const attemptRegister = async() => {
		try {
			console.log("attemptRegister --");
		}
		catch (err) {
			console.log(err);
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
						<input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
					</div>	

					<div className={styles.registerField}> 
						<p> Confirm Password </p>  
						<input type="text" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
					</div>


					<div className={styles.registerField}> 
						<p> E-Mail Address</p>  
						<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
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
