import { useState } from 'react'
import styles from '@styles/Home.module.css'
import { Link } from "react-router-dom";

export default function Navbar () {
	return (

		<div className={` ${styles.container} ${styles.navbar} `} > 

			<div className={` ${styles.navbarName} `} > 
				<p> 
					GhostFree	
				</p> 
			</div> 


			<div className={` ${styles.navbarContents} `} > 
	{/*
			  <a href="#home" >Home</a>
			  <a href="#about" >About</a>
			  <a href="#services" >Services</a>
			  <a href="#contact" >Contact</a>
	*/}`
			</div> 


			<div className={` ${styles.navbarSpace} `} > 
			</div> 

			<div className={` ${styles.navbarLogin} `} > 
				<button>
					<Link to={"/login"} >
						Login
					</Link>
				</button> 

				<button>
					<Link to={"/register"} >
						Register
					</Link>
				</button> 
			</div> 

		</div> 
	)
}
