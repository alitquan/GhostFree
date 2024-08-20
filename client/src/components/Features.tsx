import { useState } from 'react'
import styles from '@styles/Home.module.css'
import ghostLogo from '@assets/ghostLogo.png' 

export default function Features () {
	return (

		<div className={` ${styles.container} ${styles.features}`} > 


			<div className={` ${styles.featuresSquare}`} > 
				<div className= {styles.featureText}
					 style = {{
				        borderRadius: 'var(--brdRad1) 0 0 0'
					 }}
				>
					<h5> Personality-First </h5> 
					<p> 
	Engage in meaningful conversations where skipping is discouraged. You won’t see their face right away— get to know them for who they are before asking for pics.  
					</p>
					<p className={styles.featureEmojis}> &#128584; </p>
				</div> 

				<div className = {styles.featurePicture}>
					<img src={ghostLogo} alt="Centered Image" className={styles.centeredImageFeature} />
				</div>
			</div> 
			<div className={` ${styles.featuresSquare}`} > 
				<div className= {styles.featureText}>
					<h5> AI-Driven Matching</h5> 
					<p> 
Our advanced machine learning algorithm matches you with people who share your values and interests, increasing the chances of forming lasting friendships!  </p>
					<p className={styles.featureEmojis} > 💻</p>
				</div> 

				<div className = {styles.featurePicture}>
					<img src={ghostLogo} alt="Centered Image" className={styles.centeredImageFeature} />
				</div>
			
			</div> 
			
			<div className={` ${styles.featuresSquare}`} > 
				<div className= {styles.featureText}
					 style = {{
				        borderRadius: '0 var(--brdRad1) 0 0'
					 }}
				>
					<h5> Connections Over Photos</h5> 
					<p  > 
Photos are only shared when a connection was realized. Only then can exchange photos and decide to add each other as friends to continue the journey.
					</p>
					<p className={styles.featureEmojis}> 📷 </p>
				</div> 

				<div className = {styles.featurePicture}>
					<img src={ghostLogo} alt="Centered Image" className={styles.centeredImageFeature} />
				</div>
			</div> 

		</div> 
	)
}
			
