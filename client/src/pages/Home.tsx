import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '@styles/Home.module.css'
import Navbar from '@components/Navbar.tsx'
import Headline from '@components/Headline.tsx'


export default function Home () {
	return (
		<div className={`${styles.base} ${styles.container}`} > 
  			<Navbar />	
			<Headline />
		</div> 

	)
}
