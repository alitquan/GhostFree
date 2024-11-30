import styles from '@styles/Home.module.css' 
import ghostLogo from '@assets/ghostLogo.png' 
export default function Footer() {
	return(

		<div className= {`${styles.footer}`} > 

			<div className= {`${styles.footerPortionEnd} }`}
			style={{ paddingLeft: '3vw', 
				paddingTop: '4vh',
			height: 'auto',
			}}
			> 
			<p style = {{ fontSize: '20px', margin: 0 }}> 
				Ⓒ 2024 NoGhost 
			</p> 
			</div>


			<div className= {`${styles.footerPortionMiddle}`} > 
				<img src={ghostLogo} alt="Centered Image" className={styles.centeredImage} />
			</div>


			<div className= {`${styles.footerPortionEnd} }`}
				style={{ paddingLeft: '2vw', 
						  paddingTop: '5vh',
						  height: 'auto'
				 }}
			>
				<p style = {{ fontSize: '20px', margin: 0 }}> 
					Media Placeholder	
				</p> 
			</div>


		</div>
	)

	

}
